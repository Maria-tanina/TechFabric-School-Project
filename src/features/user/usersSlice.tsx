import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
  filterQuery: "",
  selectedRole: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setFilterQuery: (state, action: PayloadAction<string>) => {
      state.filterQuery = action.payload;
    },
    setSelectedRole: (state, action: PayloadAction<string>) => {
      state.selectedRole = action.payload;
    },
  },
});

export const { setIsLogin, setFilterQuery, setSelectedRole } =
  usersSlice.actions;

export default usersSlice.reducer;
