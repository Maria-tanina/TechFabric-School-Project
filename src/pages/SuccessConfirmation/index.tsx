import {
  StyledDescription,
  StyledInfo,
} from "@pages/SuccessConfirmation/style";
import Logo from "@components/Logo";
import { AuthCard } from "@components/AuthCard";
import { OutlinedButton } from "@components/OutlinedButton";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_PATH } from "@constants/paths";
import { MainHeader } from "@components/MainHeader";
import { useEffect } from "react";
import { LSService } from "@services/localStorage";

const SuccessConfirmation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const storage = LSService();

  useEffect(() => {
    storage.set("registrationToken", token);
    console.log(queryParams);
  }, [token]);

  return (
    <section>
      <AuthCard>
        <StyledInfo>
          <Logo />

          <MainHeader>Registration confirmed</MainHeader>

          <StyledDescription>
            Thank you, your registration has been successfully confirmed!
          </StyledDescription>
        </StyledInfo>

        <OutlinedButton>
          <Link to={LOGIN_PATH}> Back to Login In</Link>
        </OutlinedButton>
      </AuthCard>
    </section>
  );
};

export default SuccessConfirmation;
