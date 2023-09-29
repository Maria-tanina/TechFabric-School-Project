import { createSelector } from "reselect";
import { favoritesApi } from "@services/favoritesApi";

export const selectLikesData = favoritesApi.endpoints.getLikesPost.select();

export const selectFavoritesData = favoritesApi.endpoints.getFavorites.select();

export const selectLikedPostIds = createSelector(
  selectLikesData,
  (queryResult) => {
    if (queryResult.data) {
      return queryResult.data;
    }
  }
);

export const selectFavoritesPostIds = createSelector(
  selectFavoritesData,
  (queryResult) => {
    if (queryResult.data) {
      return queryResult.data;
    }
  }
);
