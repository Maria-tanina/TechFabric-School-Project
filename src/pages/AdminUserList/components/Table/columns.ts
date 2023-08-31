import { Column } from "./types";

export const columns: readonly Column[] = [
  { id: "nickname", label: "Nickname", minWidth: 130 },
  { id: "email", label: "Email", minWidth: 130 },
  {
    id: "role",
    label: "Role",
    minWidth: 260,
  },
];
