import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverUrl = process.env.REACT_APP_API_URL;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation
} = usersApi;
