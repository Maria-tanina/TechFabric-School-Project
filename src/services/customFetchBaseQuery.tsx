import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenInfo } from "@helpers/jwtParser";
import { LSService } from "@services/localStorage";

const { get, set } = LSService();

export const customFetchBaseQuery = (baseUrl: string | undefined) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers) => {
      const token = get("accessToken");
      const refreshToken = get("refreshToken");

      if (refreshToken) {
        const isTokenValid = getTokenInfo(token);

        if (!isTokenValid) {
          const response = await fetch(`${baseUrl}/token/refresh`, {
            method: "POST",
            headers: {
              accept: "text/plain",
              Authorization: `Bearer ${refreshToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
          });

          if (response.ok) {
            const data = await response.json();
            const newAccessToken = data.accessToken;
            const newRefreshToken = data.refreshToken;
            set("accessToken", newAccessToken);
            set("refreshToken", newRefreshToken);
            headers.set("Authorization", `Bearer ${newAccessToken}`);
          }
        } else {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  });
};
