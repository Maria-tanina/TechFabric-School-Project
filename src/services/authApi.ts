import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILoginData, IUserInfo } from "@customTypes/authTypes";
import { LSService } from "@services/localStorage";

const serverUrl = process.env.REACT_APP_API_URL;
const { get } = LSService();

interface IGetTokenResponse {
  accessToken: string;
  refreshToken: string;
}

const { set } = LSService();

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
    prepareHeaders: (headers) => {
      const token = get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UNAUTHORIZED'],
  endpoints: (build) => ({
    login: build.mutation<IGetTokenResponse, ILoginData>({
      query: (body) => ({
        url: "/api/token",
        method: "POST",
        body,
        credentials: "include"
      }),
      onQueryStarted: async (args, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          set("token", data.accessToken);
          set("refreshToken", data.refreshToken);
        } catch (err) {

        }
      },
      invalidatesTags: ['UNAUTHORIZED']
    }),

    getUsersInfo: build.query<IUserInfo, void>({
      query: () => "/api/users/info",
      providesTags: ["UNAUTHORIZED"]
    }),
  }),
})

export const {useLoginMutation, useGetUsersInfoQuery} = authApi;