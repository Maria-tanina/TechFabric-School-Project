import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdminInitialState } from "./types";

const initialState: IAdminInitialState = {
  paginationPage: 0,
  rowsPerPage: 10,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setPaginationPage: (state, action: PayloadAction<number>) => {
      state.paginationPage = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.paginationPage = action.payload;
    },
  },
});

export const { setPaginationPage, setRowsPerPage } = adminSlice.actions;

export default adminSlice.reducer;
