import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortSliceInitialState } from "./types";

const initialState: ISortSliceInitialState = {
  type: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = sortSlice.actions;

export default sortSlice.reducer;
