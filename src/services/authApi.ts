import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILoginData, IUserInfo } from "@customTypes/authTypes";
import { LSService } from "@services/localStorage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const serverUrl = process.env.REACT_APP_API_URL;
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
      const token = get('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UNAUTHORIZED'],
  endpoints: (build) => ({
    login: build.mutation<IUserInfo, ILoginData>({
      queryFn: async (body, { getState }, extraOptions, fetchWithBQ) => {
        const loginResponse = await fetchWithBQ( {
          url: "/api/token",
          method: "POST",
          body,
          credentials: "include",
        });

        if (loginResponse.error) {
          return { error: loginResponse.error.data as FetchBaseQueryError }
        }

        const loginData = loginResponse.data as IGetTokenResponse;

        const {accessToken, refreshToken} = loginData;

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
          return {error: userInfoResponse.error.data as FetchBaseQueryError }
        } else {
          return { data: userInfoResponse.data as IUserInfo }
        }
      },
      invalidatesTags:(result) => result ? ['UNAUTHORIZED'] : []
    }),

    getUsersInfo: build.query<IUserInfo, void>({
      query: () => "/api/users/info",
      providesTags: ["UNAUTHORIZED"]
    }),
  }),
})

export const {useLoginMutation} = authApi;