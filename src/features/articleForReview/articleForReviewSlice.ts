import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArticleForReviewSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
}
const initialState: IArticleForReviewSliceState = {
  pageNumber: 1,
  pageSize: 6,
  orderBy: "byCreatedDateDesc",
};

const articleForReviewSlice = createSlice({
  name: "FavoriteArticle",
  initialState,
  reducers: {
    setArticleForReviewPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setArticleForReviewPageNumber } = articleForReviewSlice.actions;

export default articleForReviewSlice.reducer;
