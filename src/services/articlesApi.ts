import { createApi } from "@reduxjs/toolkit/query/react";
import { IArticle, IUpdateArticleProps } from "@customTypes/articleTypes";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
  IArticleParams,
  IGetArticlesResponse,
  IPublishArticleRequest,
  ISearchByTags,
  ISport,
} from "./types/articlesApiTypes";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  tagTypes: ["ARTICLES", "MY_ARTICLES", "CURRENT_ARTICLE"],
  endpoints: (build) => ({
    getArticles: build.query<IGetArticlesResponse, IArticleParams>({
      query: ({ pageNumber, pageSize, orderBy }) => ({
        url: "/articles/published",
        params: {
          pageNumber,
          pageSize,
          orderBy,
        },
        method: "GET",
      }),
      providesTags: ["ARTICLES"],
    }),
    getMyArticles: build.query<IGetArticlesResponse, IArticleParams>({
      query: ({ pageNumber, pageSize, orderBy }) => ({
        url: "/articles/mine",
        params: {
          pageNumber,
          pageSize,
          orderBy,
        },
        method: "GET",
      }),
      providesTags: ["ARTICLES", "MY_ARTICLES"],
    }),
    getSportTypes: build.query<ISport[], void>({
      query: () => ({
        url: "/sports",
        method: "GET",
      }),
    }),
    getArticleInfo: build.query<IArticle, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "GET",
      }),
      providesTags: ["ARTICLES", "CURRENT_ARTICLE"],
    }),
    updateArticle: build.mutation<
      void,
      { updatedData: IUpdateArticleProps | undefined; articleId: string }
    >({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "PATCH",
        body: args.updatedData,
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    deleteArticle: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    createDraftArticle: build.mutation<void, IPublishArticleRequest>({
      query: (body) => ({
        url: "/articles",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    getArticlesForReview: build.query<IGetArticlesResponse, IArticleParams>({
      query: ({ pageNumber, pageSize, orderBy }) => ({
        url: "/articles/in-review",
        params: {
          pageNumber,
          pageSize,
          orderBy,
        },
      }),
      providesTags: ["ARTICLES"],
    }),
    publishArticle: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}/publish`,
        method: "PATCH",
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    getArticlesByTags: build.query<IGetArticlesResponse, ISearchByTags>({
      query: ({ pageNumber, pageSize, orderBy, substring }) => ({
        url: "/articles/search-by-tag",
        params: {
          substring,
          pageNumber,
          pageSize,
          orderBy,
        },
        method: "GET",
      }),
      providesTags: ["ARTICLES"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetMyArticlesQuery,
  useGetSportTypesQuery,
  useGetArticleInfoQuery,
  useCreateDraftArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useGetArticlesForReviewQuery,
  usePublishArticleMutation,
  useGetArticlesByTagsQuery,
} = articlesApi;
