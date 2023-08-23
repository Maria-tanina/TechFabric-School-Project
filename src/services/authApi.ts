import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IRegistrationFormValues } from "@features/registration/types";

const serverUrl = process.env.REACT_APP_API_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
  }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    signup: build.mutation<void, IRegistrationFormValues>({
      query: (userData) => ({
        url: "/api/users/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation } = authApi;
