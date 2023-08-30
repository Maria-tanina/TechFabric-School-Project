import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILoginData, IUserInfo } from "@customTypes/authTypes";
import { LSService } from "@services/localStorage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { IForgotPasswordFormValues } from "@features/forgotPassword/types";
import { IPasswordRecoveryFormValues } from "@features/passwordRecovery/types";
import { IRegistrationFormValues } from "@features/registration/components/RegistrationForm/types";

const serverUrl = process.env.REACT_APP_DEV_API_URL;
const { set, get } = LSService();

interface IGetTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
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
  tagTypes: ["UNAUTHORIZED"],
  endpoints: (build) => ({
    login: build.mutation<IUserInfo, ILoginData>({
      queryFn: async (body, { getState }, extraOptions, fetchWithBQ) => {
        const loginResponse = await fetchWithBQ({
          url: "/api/token",
          method: "POST",
          body,
          credentials: "include",
        });

        if (loginResponse.error) {
          return { error: loginResponse.error.data as FetchBaseQueryError };
        }

        const loginData = loginResponse.data as IGetTokenResponse;

        const { accessToken, refreshToken } = loginData;

        set("accessToken", accessToken);

        set("refreshToken", refreshToken);

        const userInfoResponse = await fetchWithBQ({
          url: "/api/users/info",
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (userInfoResponse.error) {
          return { error: userInfoResponse.error.data as FetchBaseQueryError };
        } else {
          return { data: userInfoResponse.data as IUserInfo };
        }
      },
      invalidatesTags: (result) => (result ? ["UNAUTHORIZED"] : []),
    }),

    getUsersInfo: build.query<IUserInfo, void>({
      query: () => "/api/users/info",
      providesTags: ["UNAUTHORIZED"],
    }),

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
      { passwords: IPasswordRecoveryFormValues; token: string }
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

    verified: build.mutation<void, string | null>({
      query: (token) => ({
        url: `/api/users/confirmation?verificationToken=${token}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useResendEmailMutation,
  useVerifiedMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useRecoveryPasswordMutation,
} = authApi;
