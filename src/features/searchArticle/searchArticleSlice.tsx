import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrderByTypes } from "@services/types/articlesApiTypes";

interface ISearchArticleSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
}
const initialState: ISearchArticleSliceState = {
  pageNumber: 1,
  pageSize: 5,
  orderBy: "byCreatedDateDesc",
};

const searchArticleSlice = createSlice({
  name: "searchArticle",
  initialState,
  reducers: {
    setSearchPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setSearchPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setSearchOrderBy: (state, action: PayloadAction<TOrderByTypes>) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setSearchPageNumber } = searchArticleSlice.actions;

export default searchArticleSlice.reducer;
