import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";
import { FC } from "react";
import { IRequireAuthProps } from "@components/RequireAuth/types";

const RequireAuth: FC<IRequireAuthProps> = ({ redirectTo, allowedRoles }) => {
  const isLogin = useAppSelector((state) => state.users.isLogin);
  const userInfo = useAppSelector((state) => state.users.userInfo);
  const location = useLocation();

  return isLogin && allowedRoles.find((role) => role === userInfo?.userRole) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};

export default RequireAuth;
