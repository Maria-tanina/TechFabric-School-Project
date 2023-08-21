import { Role } from "@components/NavigationMenu/enums";

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userRole: Role
}