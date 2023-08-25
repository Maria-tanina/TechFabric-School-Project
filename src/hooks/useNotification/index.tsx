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
  const [notification, setNotification] = useState<{
    message: string;
    color: "success" | "error" | "info" | "warning";
  } | null>(null);

  const showNotification = (
    message: string,
    color: "success" | "error" | "info" | "warning"
  ) => {
    setNotification({ message, color });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Snackbar
          open={true}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={notification.color}
            onClose={() => setNotification(null)}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      )}
    </NotificationContext.Provider>
  );
};
