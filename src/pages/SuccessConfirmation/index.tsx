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
import { useVerifiedMutation } from "@services/authApi";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const SuccessConfirmation = () => {
  const [mutateToken, { isError, isSuccess, error }] = useVerifiedMutation();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const storage = LSService();
  const { showNotification } = useNotification();
  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    storage.set("verificationToken", token);
  }, [token]);

  useEffect(() => {
    mutateToken(token);
  }, []);

  useEffect(() => {
    isSuccess && showNotification("Registration successful!", "success");
    isError && showNotification(errorMessage, "error");
  }, [isSuccess, isError]);

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
