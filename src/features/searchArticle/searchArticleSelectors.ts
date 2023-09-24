import { RootState } from "../../store";

export const selectSearchPageNumber = (state: RootState) =>
  state.searchArticle.pageNumber;

export const selectSearchPageSize = (state: RootState) =>
  state.searchArticle.pageSize;

export const selectSearchOrderBy = (state: RootState) =>
  state.searchArticle.orderBy;

export const selectValue = (state: RootState) => state.searchArticle.value;

export const selectAppliedValue = (state: RootState) =>
  state.searchArticle.appliedValue;

export const selectSearchBy = (state: RootState) =>
  state.searchArticle.searchBy;

export const selectSearchSportType = (state: RootState) =>
  state.searchArticle.filterSportType;
