import { IQueryParams, topsApi } from "@services/topsApi";
import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectState = (state: RootState) => state;
const selectParams = (_: any, params: IQueryParams) => params;

export const selectTags = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return topsApi.endpoints?.getTopTags.select(params)(state)?.data ?? [];
  }
);

export const selectTagsLoading = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return topsApi.endpoints?.getTopTags.select(params)(state)?.isLoading;
  }
);

export const selectTagsError = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return topsApi.endpoints?.getTopTags.select(params)(state)?.isError;
  }
);
