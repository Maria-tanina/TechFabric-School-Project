import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IRegistrationFormValues } from "@features/registration/types";
import { IForgotPasswordFormValues } from "@features/forgotPassword/types";
import { IPasswordRecoveryFormValues } from "@features/passwordRecovery/types";

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
    forgotPassword: build.mutation<void, IForgotPasswordFormValues>({
      query: (email) => ({
        url: "/api/users/restore-password",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email.email),
      }),
    }),
    recoveryPassword: build.mutation<
      void,
      { passwords: IPasswordRecoveryFormValues; token: string | null }
    >({
      query: (args) => ({
        url: `/api/users/recover-password?verificationToken=${args.token}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args.passwords),
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useForgotPasswordMutation,
  useRecoveryPasswordMutation,
} = authApi;
