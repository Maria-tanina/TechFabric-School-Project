export interface Row {
  nickname: string;
  email: string;
  role: string;
}
export interface Column {
  id: keyof Row;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
