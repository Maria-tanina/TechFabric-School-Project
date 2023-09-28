import { RootState } from "../../store";

export const selectCommentPageNumber = (state: RootState) =>
  state.comments.pageNumber;
