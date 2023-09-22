import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortSliceInitialState } from "./types";
import { SportTypes, TOrderByTypes } from "@services/types/articlesApiTypes";

const initialState: ISortSliceInitialState = {
  type: "All",
  pageNumber: 1,
  pageSize: 10,
  orderBy: "byCreatedDateDesc",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<keyof typeof SportTypes>) => {
      state.type = action.payload;
      state.pageNumber = 1;
    },
    setFilteredArticlesPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setFilteredArticlesPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.pageNumber = 1;
    },
    setFilteredArticlesOrderBy: (
      state,
      action: PayloadAction<TOrderByTypes>
    ) => {
      state.orderBy = action.payload;
      state.pageNumber = 1;
    },
  },
});

export const {
  setType,
  setFilteredArticlesPageNumber,
  setFilteredArticlesPageSize,
  setFilteredArticlesOrderBy,
} = sortSlice.actions;

export default sortSlice.reducer;
