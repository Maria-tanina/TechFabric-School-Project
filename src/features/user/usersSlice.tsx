import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { IUserInfo } from "@customTypes/authTypes";
import { mockUsersList } from "@features/user/mockUsersList";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
  usersList: mockUsersList,
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
    setUsersList: (state, action: PayloadAction<IUserInfo[]>) => {
      state.usersList = action.payload;
    },
    setFilterQuery: (state, action: PayloadAction<string>) => {
      state.filterQuery = action.payload;
    },
    setSelectedRole: (state, action: PayloadAction<string>) => {
      state.selectedRole = action.payload;
    },
  },
});

export const { setIsLogin, setUsersList, setFilterQuery, setSelectedRole } =
  usersSlice.actions;

export default usersSlice.reducer;
