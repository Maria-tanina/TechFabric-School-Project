import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { IUserInfo } from "@customTypes/authTypes";
import { mockUsersList } from "@features/user/mockUsersList";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
  usersList: mockUsersList,
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
  },
});

export const { setIsLogin, setUsersList } = usersSlice.actions;

export default usersSlice.reducer;
