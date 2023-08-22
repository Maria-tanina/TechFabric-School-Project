import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { IUserInfo } from "@customTypes/authTypes";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
  userInfo: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    }
  },
});

export const { setIsLogin, setUserInfo } = usersSlice.actions;

export default usersSlice.reducer;
