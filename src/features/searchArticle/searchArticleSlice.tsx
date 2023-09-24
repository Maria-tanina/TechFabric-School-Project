import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrderByTypes, TSportOptions } from "@services/types/articlesApiTypes";

export type TSearchBy = "articles" | "users" | "tags";

interface ISearchArticleSliceState {
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
  value: string;
  searchBy: TSearchBy;
  appliedValue: string;
  filterSportType: TSportOptions;
}

const initialState: ISearchArticleSliceState = {
  pageNumber: 1,
  pageSize: 5,
  orderBy: "byCreatedDateDesc",
  value: "",
  appliedValue: "",
  searchBy: "articles",
  filterSportType: "",
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
      state.pageNumber = 1;
    },
    setSearchOrderBy: (state, action: PayloadAction<TOrderByTypes>) => {
      state.orderBy = action.payload;
      state.pageNumber = 1;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setAppliedValue: (state, action: PayloadAction<string>) => {
      state.appliedValue = action.payload;
      state.pageNumber = 1;
    },
    setSearchBy: (state, action: PayloadAction<TSearchBy>) => {
      state.searchBy = action.payload;
      state.pageNumber = 1;
    },
    setSearchFilterSportType: (state, action: PayloadAction<TSportOptions>) => {
      state.filterSportType = action.payload;
      state.pageNumber = 1;
    },
  },
});

export const {
  setSearchPageNumber,
  setSearchOrderBy,
  setSearchFilterSportType,
  setValue,
  setAppliedValue,
  setSearchBy,
} = searchArticleSlice.actions;

export default searchArticleSlice.reducer;
