import { createApi } from "@reduxjs/toolkit/query/react";
import { IArticle } from "@customTypes/articleTypes";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  endpoints: (build) => ({
    getArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles/published",
        method: "GET",
      }),
    }),
    getMyArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles/mine",
        method: "GET",
      }),
    }),
    getSportTypes: build.query<string[], void>({
      query: () => ({
        url: "/articles/sports",
        method: "GET",
      }),
    }),
    getArticleInfo: build.query<IArticle, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetMyArticlesQuery,
  useGetSportTypesQuery,
  useGetArticleInfoQuery,
} = articlesApi;
