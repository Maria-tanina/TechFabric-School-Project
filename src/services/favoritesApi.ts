import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
  IArticleParams,
  IGetArticlesResponse,
} from "@services/types/articlesApiTypes";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  tagTypes: ["FAVORITES"],
  endpoints: (build) => ({
    addToFavorites: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/favorites/add`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args.articleId),
      }),
      invalidatesTags: ["FAVORITES"],
    }),
    removeFromFavorites: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/favorites/remove`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args.articleId),
      }),
      invalidatesTags: ["FAVORITES"],
    }),
    getFavorites: build.query<IGetArticlesResponse, IArticleParams>({
      query: ({ pageNumber, pageSize, orderBy }) => ({
        url: "/favorites",
        params: {
          pageNumber,
          pageSize,
          orderBy,
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["FAVORITES"],
    }),
    getFavoritesArticles: build.query<IGetArticlesResponse, IArticleParams>({
      query: ({ pageNumber, pageSize, orderBy }) => ({
        url: "/articles/favorites",
        params: {
          pageNumber,
          pageSize,
          orderBy,
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["FAVORITES"],
    }),
  }),
});

export const {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  useGetFavoritesQuery,
  useGetFavoritesArticlesQuery,
} = favoritesApi;
