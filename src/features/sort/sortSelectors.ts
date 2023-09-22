import { RootState } from "../../store";

export const selectSportType = (state: RootState) => state.sort.type;

export const selectFilteredPageNumber = (state: RootState) =>
  state.sort.pageNumber;

export const selectFilteredPageSize = (state: RootState) => state.sort.pageSize;

export const selectFilteredPageOrderBy = (state: RootState) =>
  state.sort.orderBy;
