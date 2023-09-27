import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
  IDeleteCommentParams,
  IGetCommentsParams,
  IPostCommentParams,
} from "@services/types/commentsApiTypes";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: customFetchBaseQuery(serverUrl),
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
        body: JSON.stringify(content),
      }),
    }),
    deleteComment: build.mutation<void, IDeleteCommentParams>({
      query: ({ commentId }) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
    getComments: build.query<void, IGetCommentsParams>({
      query: ({ articleId, pageSize, pageNumber }) => ({
        url: `/comments/${articleId}`,
        method: "GET",
        params: {
          pageSize,
          pageNumber,
        },
      }),
    }),
  }),
});

export const {
  usePostCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = commentsApi;
