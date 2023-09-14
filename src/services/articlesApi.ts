import { createApi } from "@reduxjs/toolkit/query/react";
import { IArticle, IUpdateArticleProps } from "@customTypes/articleTypes";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export interface IPublishArticleRequest {
  title: string;
  sport: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  content: string;
}

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  tagTypes: ["ARTICLES"],
  endpoints: (build) => ({
    getArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles/published",
        method: "GET",
      }),
      providesTags: ["ARTICLES"],
    }),
    getMyArticles: build.query<IArticle[], void>({
      query: () => ({
        url: "/articles/mine",
        method: "GET",
      }),
      providesTags: ["ARTICLES"],
    }),
    getSportTypes: build.query<string[], void>({
      query: () => ({
        url: "/articles/sports",
        method: "GET",
      }),
    }),
    getArticleInfo: build.query<IArticle, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "GET",
      }),
      providesTags: ["ARTICLES"],
    }),
    updateArticle: build.mutation<
      void,
      { updatedData: IUpdateArticleProps | undefined; articleId: string }
    >({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "PATCH",
        body: args.updatedData,
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    deleteArticle: build.mutation<void, { articleId: string }>({
      query: (args) => ({
        url: `/articles/${args.articleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ARTICLES"],
    }),
    createDraftArticle: build.mutation<void, IPublishArticleRequest>({
      query: (body) => ({
        url: "/articles",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ARTICLES"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetMyArticlesQuery,
  useGetSportTypesQuery,
  useGetArticleInfoQuery,
  useCreateDraftArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
