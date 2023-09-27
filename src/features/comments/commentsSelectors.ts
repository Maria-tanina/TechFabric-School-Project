import { RootState } from "../../store";

export const selectCommentPageSize = (state: RootState) =>
  state.comments.pageSize;
