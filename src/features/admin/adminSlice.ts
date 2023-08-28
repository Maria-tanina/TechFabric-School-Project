import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdminInitialState } from "./types";

const initialState: IAdminInitialState = {
  draftFilter: {
    query: "",
    role: "",
  },
  appliedFilter: {
    query: "",
    role: "",
  },
  paginationPage: 0,
  rowsPerPage: 10,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setDraftFilterQuery: (state, action: PayloadAction<string>) => {
      state.draftFilter.query = action.payload;
    },
    setDraftFilterRole: (state, action: PayloadAction<string>) => {
      state.draftFilter.role = action.payload;
    },
    setAppliedFilterQuery: (state, action: PayloadAction<string>) => {
      state.appliedFilter.query = action.payload;
    },
    setAppliedFilterRole: (state, action: PayloadAction<string>) => {
      state.appliedFilter.role = action.payload;
    },
    setPaginationPage: (state, action: PayloadAction<number>) => {
      state.paginationPage = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const {
  setDraftFilterQuery,
  setDraftFilterRole,
  setAppliedFilterQuery,
  setAppliedFilterRole,
  setPaginationPage,
  setRowsPerPage,
} = adminSlice.actions;

export default adminSlice.reducer;
