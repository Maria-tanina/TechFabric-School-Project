import { createSelector } from "@reduxjs/toolkit";
import { articlesApi } from "@services/articlesApi";

const selectSportTypes = articlesApi.endpoints?.getSportTypes.select();

const selectMyArticles = articlesApi.endpoints?.getMyArticles.select();

export const selectSportTypesData = createSelector(
  selectSportTypes,
  (queryResult) => queryResult.data
);

export const selectMyArticlesData = createSelector(
  selectMyArticles,
  (queryResult) => queryResult.data
);
