import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
  IComment,
  IDeleteCommentParams,
  IGetCommentsParams,
  IGetCommentsResponse,
  IPostCommentParams,
} from "@services/types/commentsApiTypes";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  tagTypes: ["COMMENTS"],
  endpoints: (build) => ({
    postComment: build.mutation<IComment, IPostCommentParams>({
      query: ({ articleId, content }) => ({
        url: "/comments",
        method: "POST",
        params: {
          articleId,
        },
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          content: content,
        },
      }),
      async onQueryStarted(
        { content, articleId, pageSize, pageNumber },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            commentsApi.util.updateQueryData(
              "getComments",
              { pageSize, articleId, pageNumber },
              (draft) => {
                draft.comments.unshift(data);
                draft.totalCount += 1;
              }
            )
          );
        } catch {}
      },
    }),
    deleteComment: build.mutation<void, IDeleteCommentParams>({
      query: ({ commentId }) => ({
        url: `/comments/${commentId}`,

        method: "DELETE",
      }),

      async onQueryStarted(
        { commentId, pageSize, articleId, pageNumber },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          commentsApi.util.updateQueryData(
            "getComments",
            { pageSize, articleId, pageNumber },
            (draft) => {
              draft.comments = draft.comments.filter(
                (comment) => comment.commentId !== commentId
              );
              draft.totalCount -= 1;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    getComments: build.query<IGetCommentsResponse, IGetCommentsParams>({
      query: ({ articleId, pageSize, pageNumber }) => ({
        url: `/comments/${articleId}`,
        method: "GET",
        params: {
          pageSize,
          pageNumber,
        },
      }),

      serializeQueryArgs: ({ queryArgs }) => {
        const { pageNumber, ...newQueryArgs } = queryArgs;
        return newQueryArgs;
      },

      merge: (currentCache, newItems) => {
        if (currentCache.comments) {
          return {
            ...currentCache,
            ...newItems,
            comments: [...currentCache.comments, ...newItems.comments],
          };
        }
        return newItems;
      },

      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.pageNumber !== previousArg?.pageNumber ||
          currentArg?.articleId !== previousArg?.articleId
        );
      },
    }),
  }),
});

export const {
  usePostCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = commentsApi;
