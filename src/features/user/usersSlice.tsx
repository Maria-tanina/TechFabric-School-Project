import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceInitialState } from "@features/user/types";

const initialState: IUsersSliceInitialState = {
  isLogin: false,
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
  },
});

export const { setIsLogin, setEmail } = usersSlice.actions;

export default usersSlice.reducer;
