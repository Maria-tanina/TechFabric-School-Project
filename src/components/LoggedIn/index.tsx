import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";
import { FC } from "react";

export interface ILoggedInProps {
  redirectTo: string;
}

const LoggedIn: FC<ILoggedInProps> = ({ redirectTo }) => {
  const isLogin = useAppSelector((state) => state.users.isLogin);

  return isLogin ? (
    <Navigate to={redirectTo} replace />
  ) : (
    <Outlet />
  );
};

export default LoggedIn;
