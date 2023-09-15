import { createSelector } from "@reduxjs/toolkit";
import { articlesApi } from "@services/articlesApi";

const selectSportTypes = articlesApi.endpoints?.getSportTypes.select();

export const selectSportNames = createSelector(
  selectSportTypes,
  (queryResult) => queryResult.data?.map((type) => type.name)
);
