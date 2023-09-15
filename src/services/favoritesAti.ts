import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  endpoints: (build) => ({
    addToFavorites: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/favorites/add`,
        method: "POST",
        body: args.articleId,
      }),
    }),
    removeFromFavorites: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/favorites/remove`,
        method: "DELETE",
        body: args.articleId,
      }),
    }),
  }),
});

export const { useAddToFavoritesMutation, useRemoveFromFavoritesMutation } =
  favoritesApi;
