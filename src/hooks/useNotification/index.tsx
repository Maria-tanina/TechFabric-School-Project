import React, { createContext, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import {
  NotificationContextType,
  NotificationProviderProps,
} from "@hooks/useNotification/types";

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = (): NotificationContextType => {
  return useContext(NotificationContext) as NotificationContextType;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<
    Array<{
      id: number;
      message: string;
      color: "success" | "error" | "info" | "warning";
    }>
  >([]);

  const showNotification = (
    message: string,
    color: "success" | "error" | "info" | "warning"
  ) => {
    const id = new Date().getTime();
    setNotifications((prev) => [...prev, { id, message, color }]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notifications.map((notification, index) => (
        <Snackbar
          key={notification.id}
          open={true}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          style={{ marginTop: `${index * 70}px` }}
        >
          <Alert
            severity={notification.color}
            onClose={() =>
              setNotifications((prev) =>
                prev.filter((n) => n.id !== notification.id)
              )
            }
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </NotificationContext.Provider>
  );
};
