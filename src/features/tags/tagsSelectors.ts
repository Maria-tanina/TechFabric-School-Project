import { createSelector } from "@reduxjs/toolkit";
import { topsApi } from "@services/topsApi";

const selectTopTags = topsApi.endpoints?.getTopTags.select({
    pageSize: 7,
    pageNumber: 1,
});

export const selectTags = createSelector(
    selectTopTags,
  (queryResult) => queryResult.data?.map((tag) => tag.tagName) || []
);

export const selectTagsIsError = createSelector(
    selectTopTags,
  (queryResult) => queryResult.isError
);
