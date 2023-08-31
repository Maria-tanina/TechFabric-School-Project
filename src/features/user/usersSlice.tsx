import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";
import { LSService } from "@services/localStorage";

const { remove, get } = LSService();

const initialState: IUsersSliceInitialState = {
  isLogin: !!get("refreshToken"),
  email: "",
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
    logOut: (state) => {
      state.isLogin = false;
      state.email = "";
      remove("accessToken");
      remove("refreshToken");
    },
  },
});

export const { setIsLogin, setEmail, logOut } = usersSlice.actions;

export default usersSlice.reducer;
