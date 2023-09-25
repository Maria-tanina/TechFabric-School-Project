import { IQueryParams, topsApi } from "@services/topsApi";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectState = (state: RootState) => state;
const selectParams = (_: any, params: IQueryParams) => params;

export const selectTopAuthors = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return topsApi.endpoints?.getTopAuthors.select(params)(state)?.data ?? [];
  }
);

export const selectTopAuthorsError = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return topsApi.endpoints?.getTopAuthors.select(params)(state)?.isError;
  }
);
