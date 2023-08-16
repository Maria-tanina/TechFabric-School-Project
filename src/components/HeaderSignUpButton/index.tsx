import { Link } from "react-router-dom";
import { ButtonStyle } from "@components/HeaderSignUpButton/style";
import { SIGNUP_PATH } from "@constants/paths";

export const HeaderSignUpButton = () => {
  return (
    <ButtonStyle>
      <Link to={SIGNUP_PATH}>Sign Up</Link>
    </ButtonStyle>
  );
};

export default HeaderSignUpButton;
