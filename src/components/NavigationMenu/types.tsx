import React from "react";
import { Role } from "@components/NavigationMenu/enums";

export interface IMenuItem {
  value: string;
  link: string;
  icon: React.ReactNode;
  access: Role;
}
