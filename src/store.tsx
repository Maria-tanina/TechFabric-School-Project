import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@services/usersApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersSlice from "@features/user/usersSlice";
import adminSlice from "@features/admin/adminSlice";
import { authApi } from "@services/authApi";
import articleSlice from "@features/article/articleSlice";
import { articlesApi } from "@services/articlesApi";
import { favoritesApi } from "@services/favoritesApi";
import favoritesArticleSlice from "@features/favoritesArticle/favoritesArticleSlice";
import { topsApi } from "@services/topsApi";
import myArticleSlice from "@features/myArticle/myArticleSlice";
import articleForReviewSlice from "@features/articleForReview/articleForReviewSlice";
import searchArticleSlice from "@features/searchArticle/searchArticleSlice";
import { commentsApi } from "@services/commentsApi";
import commentsSlice from "@features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersSlice,
    admin: adminSlice,
    [authApi.reducerPath]: authApi.reducer,
    article: articleSlice,
    favoritesArticle: favoritesArticleSlice,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [topsApi.reducerPath]: topsApi.reducer,
    myArticle: myArticleSlice,
    articleForReview: articleForReviewSlice,
    searchArticle: searchArticleSlice,
    [commentsApi.reducerPath]: commentsApi.reducer,
    comments: commentsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      articlesApi.middleware,
      favoritesApi.middleware,
      topsApi.middleware,
      commentsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
