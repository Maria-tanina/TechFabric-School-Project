import { RootState } from "../../store";

export const selectSearchPageNumber = (state: RootState) =>
  state.searchArticle.pageNumber;

export const selectSearchPageSize = (state: RootState) =>
  state.searchArticle.pageSize;

export const selectSearchOrderBy = (state: RootState) =>
  state.searchArticle.orderBy;

export const selectValue = (state: RootState) => state.searchArticle.value;
