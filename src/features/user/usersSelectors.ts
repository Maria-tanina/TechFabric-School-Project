import { RootState } from "../../store";
import { Role } from "@constants/roles";

export const selectIsLogin = (state: RootState) => state.users.isLogin;

export const selectUserInfo = (state: RootState) => state.users.userInfo;

export const selectFullName = (state: RootState) =>
  `${state.users.userInfo?.firstName} ${state.users.userInfo?.lastName}`;

export const selectIsAuthor = (state: RootState) =>
  state.users.userInfo?.userRole === Role.Author;

export const selectIsSuperAdmin = (state: RootState) =>
  state.users.userInfo?.userRole === Role.SuperAdmin;
