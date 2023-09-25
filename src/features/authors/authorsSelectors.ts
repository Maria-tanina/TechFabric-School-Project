import { topsApi } from "@services/topsApi";
import { createSelector } from "@reduxjs/toolkit";

export const selectTopAuthors = createSelector(
  [(state) => state, (_, params) => params],
  (state, params) => {
    return topsApi.endpoints?.getTopAuthors.select(params)(state)?.data ?? [];
  }
);

export const selectTopAuthorsError = createSelector(
  [(state) => state, (_, params) => params],
  (state, params) => {
    return topsApi.endpoints?.getTopAuthors.select(params)(state)?.isError;
  }
);
