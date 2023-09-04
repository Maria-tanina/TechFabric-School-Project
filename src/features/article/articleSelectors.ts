import { RootState } from "../../store";

export const selectArticleImage = (state: RootState) => state.article.image;

export const selectArticleTitle = (state: RootState) => state.article.title;

export const selectArticleTags = (state: RootState) => state.article.tags;

export const selectArticleThemes = (state: RootState) => state.article.themes;
