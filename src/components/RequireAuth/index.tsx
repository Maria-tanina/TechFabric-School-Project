import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";
import { FC } from "react";
import { IRequireAuthProps } from "@components/RequireAuth/types";
import { useGetUsersInfoQuery } from "@services/authApi";
import { selectIsLogin } from "@features/user/usersSelectors";

const RequireAuth: FC<IRequireAuthProps> = ({ redirectTo, allowedRoles }) => {
  const isLogin = useAppSelector(selectIsLogin);

  const { data: userInfo } = useGetUsersInfoQuery();

  const location = useLocation();

  return isLogin && allowedRoles.find((role) => role === userInfo?.userRole) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};

export default RequireAuth;
