import {createApi} from "@reduxjs/toolkit/query/react";
import {IArticle, IUpdateArticleProps} from "@customTypes/articleTypes";
import {customFetchBaseQuery} from "@services/customFetchBaseQuery";

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
    endpoints: (build) => ({
        getArticles: build.query<IArticle[], void>({
            query: () => ({
                url: "/articles/published",
                method: "GET",
            }),
        }),
        getMyArticles: build.query<IArticle[], void>({
            query: () => ({
                url: "/articles/mine",
                method: "GET",
            }),
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
        }),
        updateArticle: build.mutation<void, { data: IUpdateArticleProps | undefined; articleId: string }>({
            query: (args) => ({
                url: `/articles/${args.articleId}`,
                method: "PATCH",
                ContentType: "application/json",
                body: JSON.stringify(args.data),
            }),
        }),
        createDraftArticle: build.mutation<void, IPublishArticleRequest>({
            query: (body) => ({
                url: "/articles",
                method: "POST",
                body,
            }),
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
} = articlesApi;
