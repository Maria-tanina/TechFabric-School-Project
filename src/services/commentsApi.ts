import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
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
    postComment: build.mutation<void, IPostCommentParams>({
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
      invalidatesTags: ["COMMENTS"],
    }),
    deleteComment: build.mutation<void, IDeleteCommentParams>({
      query: ({ commentId }) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COMMENTS"],
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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.pageNumber === 1) {
          return newItems;
        }

        return {
          ...currentCache,
          comments: [...currentCache.comments, ...newItems.comments],
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["COMMENTS"],
    }),
  }),
});

export const {
  usePostCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = commentsApi;
