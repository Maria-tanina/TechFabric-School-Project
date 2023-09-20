import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMyArticleSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
}
const initialState: IMyArticleSliceState = {
  pageNumber: 1,
  pageSize: 6,
  orderBy: "byCreatedDateDesc",
};

const myArticleSlice = createSlice({
  name: "FavoriteArticle",
  initialState,
  reducers: {
    setMyArticlePageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setMyArticlePageNumber } = myArticleSlice.actions;

export default myArticleSlice.reducer;
