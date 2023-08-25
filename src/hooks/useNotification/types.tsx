import { ReactNode } from "react";

export type NotificationContextType = {
  showNotification: (
    message: string,
    color: "success" | "error" | "info" | "warning"
  ) => void;
};
export type NotificationProviderProps = {
  children: ReactNode;
};
