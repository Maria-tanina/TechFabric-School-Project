import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommentsSliceState {
  pageNumber: number;
  pageSize: number;
}

const initialState: ICommentsSliceState = {
  pageNumber: 1,
  pageSize: 5,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    incCommentPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = state.pageNumber + action.payload;
    },
    setCommentPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { incCommentPageNumber, setCommentPageNumber } =
  commentsSlice.actions;

export default commentsSlice.reducer;
