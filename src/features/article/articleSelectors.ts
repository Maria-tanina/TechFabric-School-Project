import { RootState } from "../../store";

export const selectArticleImage = (state: RootState) => state.article.image;

export const selectArticleTitle = (state: RootState) => state.article.title;

export const selectArticleDescription = (state: RootState) =>
  state.article.description;

export const selectArticleTags = (state: RootState) => state.article.tags;

export const selectArticleType = (state: RootState) => state.article.type;

export const selectArticleContent = (state: RootState) => state.article.content;

export const selectShowPreview = (state: RootState) =>
  state.article.showPreview;

export const selectPageNumber = (state: RootState) => state.article.pageNumber;

export const selectPageSize = (state: RootState) => state.article.pageSize;

export const selectOrderBy = (state: RootState) => state.article.orderBy;

export const selectFilterSportType = (state: RootState) =>
  state.article.filterSportType;
