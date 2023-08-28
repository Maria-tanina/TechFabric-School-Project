import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "@customTypes/authTypes";
import { createSelector } from "@reduxjs/toolkit";

const serverUrl = process.env.REACT_APP_API_URL;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<IUserInfo[], void>({
      query: () => {
        //temporary mock token until it will be merged with login flow
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVlbXB0eXZlc3NlbGxAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJmZjljZTU2MC01ZGM3LTQyMzQtODBkNy0yM2MwYWUzOWFmNjYiLCJleHAiOjE2OTM3NDE1ODMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI5MyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI5MyJ9.LyP_ehnci0DmbBomZJO0gNTz4fABsNKdB-9POHYHmRo";
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
