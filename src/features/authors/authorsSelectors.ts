import { topsApi } from "@services/topsApi";
import { createSelector } from "@reduxjs/toolkit";

export const selectTopAuthors = topsApi.endpoints?.getTopAuthors.select({
  pageSize: 3,
  pageNumber: 1,
});

export const selectTopAuthorsData = createSelector(
  selectTopAuthors,
  (queryResult) => queryResult.data || []
);
