import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTokenFromUrlAndLocalStorage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token") || "";

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return token;
};
