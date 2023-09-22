import { createSelector } from "@reduxjs/toolkit";
import { topsApi } from "@services/topsApi";

const selectAllTags = topsApi.endpoints?.getTopTags.select();

export const selectTags = createSelector(
  selectAllTags,
  (queryResult) => queryResult.data?.map((tag) => tag.tagName)
);
