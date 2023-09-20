import { RootState } from "../../store";

export const selectArticleForReviewPageNumber = (state: RootState) =>
  state.articleForReview.pageNumber;

export const selectArticleForReviewPageSize = (state: RootState) =>
  state.articleForReview.pageSize;

export const selectArticleForReviewOrderBy = (state: RootState) =>
  state.articleForReview.orderBy;
