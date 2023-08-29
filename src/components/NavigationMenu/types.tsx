import React from "react";
import { Role } from "@constants/roles";

export interface IMenuItem {
  value: string;
  link: string;
  icon: React.ReactNode;
  access: Role[];
}
