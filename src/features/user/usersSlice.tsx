import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { IUserInfo } from "@customTypes/authTypes";
import { LSService } from "@services/localStorage";

const { remove, get } = LSService();

const initialState: IUsersSliceInitialState = {
  isLogin: !!get("refreshToken"),
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
    logOut: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      state.email = "";
      remove("accessToken");
      remove("refreshToken");
    },
  },
});

export const { setIsLogin, setEmail, setUserInfo, logOut } = usersSlice.actions;

export default usersSlice.reducer;
