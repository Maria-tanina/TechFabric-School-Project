import { RootState } from "../../store";

export const selectMyArticlePageNumber = (state: RootState) =>
  state.myArticle.pageNumber;

export const selectMyArticlePageSize = (state: RootState) =>
  state.myArticle.pageSize;

export const selectMyArticleOrderBy = (state: RootState) =>
  state.myArticle.orderBy;
