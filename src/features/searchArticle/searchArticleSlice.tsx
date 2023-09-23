import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrderByTypes } from "@services/types/articlesApiTypes";

export type TSearchBy = "articles" | "users" | "tags";

interface ISearchArticleSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
  value: string;
  searchBy: TSearchBy;
}

const initialState: ISearchArticleSliceState = {
  pageNumber: 1,
  pageSize: 5,
  orderBy: "byCreatedDateDesc",
  value: "",
  searchBy: "articles",
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
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setSearchBy: (state, action: PayloadAction<TSearchBy>) => {
      state.searchBy = action.payload;
    },
  },
});

export const { setSearchPageNumber, setValue, setSearchBy } =
  searchArticleSlice.actions;

export default searchArticleSlice.reducer;
