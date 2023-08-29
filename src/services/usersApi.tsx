import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "@customTypes/authTypes";
import { createSelector } from "@reduxjs/toolkit";
import { LSService } from "@services/localStorage";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

const { get } = LSService();

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<IUserInfo[], void>({
      query: () => {
        const token = get("refreshToken");
        return {
          url: "/api/users",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

export const selectGetUsersResult = usersApi.endpoints?.getUsers.select();

export const selectGetUsersData = createSelector(
  selectGetUsersResult,
  (queryResult) => queryResult.data
);

export const selectGetUsersIsError = createSelector(
  selectGetUsersResult,
  (queryResult) => queryResult.isError
);

export const selectGetUsersIsLoading = createSelector(
  selectGetUsersResult,
  (queryResult) => queryResult.isLoading
);
