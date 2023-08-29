import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { IUserInfo } from "@customTypes/authTypes";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
  email: "",
  userInfo: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setIsLogin, setEmail, setUserInfo  } = usersSlice.actions;

export default usersSlice.reducer;
