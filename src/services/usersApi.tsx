import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "@customTypes/authTypes";
import { createSelector } from "@reduxjs/toolkit";
import { LSService } from "@services/localStorage";

const serverUrl = process.env.REACT_APP_DEV_API_URL;

const { get } = LSService();

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
    prepareHeaders: (headers) => {
      const token = get("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<IUserInfo[], void>({
      query: () => {
        return {
          url: "/api/users",
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),
    changeUserRole: build.mutation<void, { userId: string; newRole: string }>({
      query: ({ userId, newRole }) => {
        return {
          url: `/api/users/${userId}/role`,
          method: "PATCH",
          body: {
            newUserRole: newRole,
          },
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useChangeUserRoleMutation } = usersApi;

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
