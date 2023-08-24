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
    resendEmail: build.mutation<void, string>({
      query: (email) => ({
        url: "/api/users/registration-confirm",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }),
    }),
    verified: build.mutation<void, string | null>({
      query: (token) => ({
        url: `/api/users/confirmation?verificationToken=${token}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "",
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useResendEmailMutation,
  useVerifiedMutation,
} = authApi;
