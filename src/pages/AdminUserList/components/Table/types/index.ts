import { Role } from "@constants/roles";

export interface Row {
  nickname: string;
  email: string;
  role: Role;
}
export interface Column {
  id: keyof Row;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
