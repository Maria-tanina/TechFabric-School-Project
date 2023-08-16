import { Link } from "react-router-dom";
import { LogInButtonStyle } from "@components/LogInButton/style";
import { LOGIN_PATH } from "@constants/paths";

export const LogInButton = () => {
  return (
    <LogInButtonStyle>
      <Link to={LOGIN_PATH}>Log In</Link>
    </LogInButtonStyle>
  );
};

export default LogInButton;
