import { IUserInfo } from "@customTypes/authTypes";

export interface IUsersSliceInitialState {
  isLogin: boolean;
  userInfo: IUserInfo | null;
}
