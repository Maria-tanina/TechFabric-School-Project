import { RootState } from "../../store";

export const selectCommentPageSize = (state: RootState) =>
  state.comments.pageSize;

export const selectCommentPageNumber = (state: RootState) =>
  state.comments.pageNumber;

export const selectComments = (state: RootState) => state.comments.comments;
