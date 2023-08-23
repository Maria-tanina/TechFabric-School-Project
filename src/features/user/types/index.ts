import { IUserInfo } from "@customTypes/authTypes";

export interface IUsersSliceInitialState {
  isLogin: boolean;
  usersList: IUserInfo[];
}
