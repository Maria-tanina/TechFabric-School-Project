import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "@services/types/commentsApiTypes";

interface ICommentsSliceState {
  pageNumber: number;
  pageSize: number;
  comments: IComment[];
}

const initialState: ICommentsSliceState = {
  pageNumber: 1,
  pageSize: 5,
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    incCommentPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = state.pageNumber + action.payload;
    },
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.comments.push(...action.payload);
    },
  },
});

export const { incCommentPageNumber, setComments } = commentsSlice.actions;

export default commentsSlice.reducer;
