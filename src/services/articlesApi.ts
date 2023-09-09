import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IArticle } from "@customTypes/articleTypes";
import { LSService } from "@services/localStorage";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

const { get } = LSService();

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
    prepareHeaders: (headers) => {
      const token = get("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles",
        method: "GET",
      }),
    }),
    getMyArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles/mine",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetMyArticlesQuery } = articlesApi;
