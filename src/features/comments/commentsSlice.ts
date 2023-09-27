import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommentsSliceState {
  pageNumber: number;
  pageSize: number;
}

const initialState: ICommentsSliceState = {
  pageNumber: 1,
  pageSize: 10,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    incCommentPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = state.pageSize + action.payload;
    },
  },
});

export const { incCommentPageSize } = commentsSlice.actions;

export default commentsSlice.reducer;
