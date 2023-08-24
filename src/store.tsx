import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@services/api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersSlice from "@features/user/usersSlice";
import { authApi } from "@services/authApi";
import adminSlice from "@features/admin/adminSlice";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersSlice,
    [authApi.reducerPath]: authApi.reducer,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
