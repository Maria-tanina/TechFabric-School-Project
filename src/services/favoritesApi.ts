import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import {
  IArticleParams,
  IGetArticlesLikes,
  IGetArticlesResponse,
} from "@services/types/articlesApiTypes";
import { articlesApi } from "@services/articlesApi";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  tagTypes: ["FAVORITES", "LIKE"],
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
    addLike: build.mutation<void, string>({
      query: (articleId) => ({
        url: "/likes",
        method: "POST",
        params: {
          articleId,
        },
      }),
      invalidatesTags: ["LIKE"],
    }),
    removeLike: build.mutation<void, string>({
      query: (articleId) => ({
        url: "/likes",
        method: "DELETE",
        params: {
          articleId,
        },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(articlesApi.util.invalidateTags(["CURRENT_ARTICLE"]));
          dispatch(articlesApi.util.invalidateTags(["MY_ARTICLES"]));
        } catch {}
      },
      invalidatesTags: ["LIKE"],
    }),
    getLikesPost: build.query<IGetArticlesLikes, void>({
      query: () => ({
        url: "/likes",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(articlesApi.util.invalidateTags(["CURRENT_ARTICLE"]));
          dispatch(articlesApi.util.invalidateTags(["MY_ARTICLES"]));
        } catch {}
      },
      providesTags: ["LIKE"],
    }),
  }),
});

export const {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  useGetFavoritesQuery,
  useGetFavoritesArticlesQuery,
  useAddLikeMutation,
  useGetLikesPostQuery,
  useRemoveLikeMutation,
} = favoritesApi;
