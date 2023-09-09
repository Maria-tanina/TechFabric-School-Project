import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@services/usersApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersSlice from "@features/user/usersSlice";
import adminSlice from "@features/admin/adminSlice";
import { authApi } from "@services/authApi";
import articleSlice from "@features/article/articleSlice";
import { articlesApi } from "@services/articlesApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersSlice,
    admin: adminSlice,
    [authApi.reducerPath]: authApi.reducer,
    article: articleSlice,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      articlesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
