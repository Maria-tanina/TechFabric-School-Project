import { RootState } from "../../store";
import { createSelector } from "reselect";
import { commentsApi } from "@services/commentsApi";
import { IGetCommentsParams } from "@services/types/commentsApiTypes";

export const selectCommentPageSize = (state: RootState) =>
  state.comments.pageSize;

export const selectCommentPageNumber = (state: RootState) =>
  state.comments.pageNumber;

const selectState = (state: RootState) => state;
const selectParams = (_: any, params: IGetCommentsParams) => params;

export const selectCommentsData = createSelector(
  [selectState, selectParams],
  (state, params) => {
    return commentsApi.endpoints?.getComments.select(params)(state)?.data;
  }
);
