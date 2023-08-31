import { Role } from "@constants/roles";

export interface IRequireAuthProps {
  redirectTo: string;
  allowedRoles: Role[];
}
