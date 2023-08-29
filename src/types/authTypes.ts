import { Role } from "@constants/roles";

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userRole: Role;
}
