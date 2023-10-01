import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrderByTypes } from "@services/types/articlesApiTypes";

interface IFavoriteArticleSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
}
const initialState: IFavoriteArticleSliceState = {
  pageNumber: 1,
  pageSize: 5,
  orderBy: "byCreatedDateDesc",
};

const favoritesArticleSlice = createSlice({
  name: "FavoriteArticle",
  initialState,
  reducers: {
    setFavoritePageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setFavoritePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setFavoriteOrderBy: (state, action: PayloadAction<TOrderByTypes>) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setFavoritePageNumber, setFavoritePageSize } =
  favoritesArticleSlice.actions;

export default favoritesArticleSlice.reducer;
