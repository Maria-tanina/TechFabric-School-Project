import { RootState } from "../../store";

export const selectFavoritePageNumber = (state: RootState) =>
  state.favoritesArticle.pageNumber;

export const selectFavoritePageSize = (state: RootState) =>
  state.favoritesArticle.pageSize;

export const selectFavoriteOrderBy = (state: RootState) =>
  state.favoritesArticle.orderBy;
