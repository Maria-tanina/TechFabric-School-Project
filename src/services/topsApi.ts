import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export interface ITagData {
  tagName: string;
}

export interface IGetTopAuthorsParams {
  pageNumber: number;
  pageSize: number;
}

export interface IAuthorData {
  authorId: string;
  firstName: string;
  lastName: string;
}

interface ITagsParam {
    pageNumber: number;
    pageSize: number;
}
export const topsApi = createApi({
  reducerPath: "topsApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  endpoints: (build) => ({
    getTopTags: build.query<ITagData[], ITagsParam>({
      query: ({ pageNumber, pageSize }) => ({
        url: "/tags/top",
        params: {
          pageNumber,
          pageSize,
        },
      }),
    }),
    getTopAuthors: build.query<IAuthorData[], IGetTopAuthorsParams>({
      query: ({ pageNumber, pageSize }) => ({
        url: "/authors/top",
        params: {
          pageNumber,
          pageSize,
        },
      }),
    }),
  })
});

export const { useGetTopTagsQuery, useGetTopAuthorsQuery } = topsApi;
