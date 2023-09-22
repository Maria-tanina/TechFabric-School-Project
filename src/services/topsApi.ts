import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "@services/customFetchBaseQuery";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

export interface ITagData {
  tagName: string;
}

export const topsApi = createApi({
  reducerPath: "topsApi",
  baseQuery: customFetchBaseQuery(serverUrl),
  endpoints: (build) => ({
    getTopTags: build.query<ITagData[], void>({
      query: () => "/tag/top",
    }),
  }),
});

export const { useGetTopTagsQuery } = topsApi;
