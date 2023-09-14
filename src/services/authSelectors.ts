import { createSelector } from "@reduxjs/toolkit";
import { authApi } from "@services/authApi";
import { Role } from "@constants/roles";

const selectUserInfo = authApi.endpoints?.getUsersInfo.select();

export const selectUserInfoData = createSelector(
  selectUserInfo,
  (queryResult) => queryResult.data
);

export const selectUserId = createSelector(
  selectUserInfoData,
  (queryResult) => queryResult?.id
);

export const selectUserFullName = createSelector(
  selectUserInfoData,
  (queryResult) => queryResult?.firstName + " " + queryResult?.lastName
);

export const selectUserIsAuthor = createSelector(
  selectUserInfoData,
  (queryResult) => queryResult?.userRole === Role.Author
);

export const selectUserIsAdmin = createSelector(
  selectUserInfoData,
  (queryResult) => queryResult?.userRole === Role.SuperAdmin
);
