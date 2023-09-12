import { RootState } from "../../store";

export const selectArticleImage = (state: RootState) => state.article.image;

export const selectArticleTitle = (state: RootState) => state.article.title;

export const selectArticleTags = (state: RootState) => state.article.tags;

export const selectArticleType = (state: RootState) => state.article.type;

export const selectArticleContent = (state: RootState) => state.article.content;

export const selectShowPreview = (state: RootState) =>
  state.article.showPreview;
