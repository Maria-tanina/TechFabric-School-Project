import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";
import { FC } from "react";
import { IRequireAuthProps } from "@components/RequireAuth/types";

const RequireAuth: FC<IRequireAuthProps> = ({ redirectTo }) => {
  const isLogin = useAppSelector((state) => state.users.isLogin);
  const location = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};

export default RequireAuth;
