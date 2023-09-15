import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";
import { articlesApi } from "@services/articlesApi";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(articlesApi.util.invalidateTags(["CURRENT_ARTICLE"]));
        } catch {}
      },
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(articlesApi.util.invalidateTags(["CURRENT_ARTICLE"]));
        } catch {}
      },
    }),
  }),
});

export const { useAddToFavoritesMutation, useRemoveFromFavoritesMutation } =
  favoritesApi;
