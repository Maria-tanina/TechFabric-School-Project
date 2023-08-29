import Logo from "@components/Logo";
import { AuthCard } from "@components/AuthCard";
import { OutlinedButton } from "@components/OutlinedButton";
import {
  StyledDescription,
  StyledInfo,
} from "@pages/RegistrationConfirm/style";
import { MainHeader } from "@components/MainHeader";
import { useResendEmailMutation } from "@services/authApi";
import { useEffect, useState } from "react";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BUTTON_DISABLE } from "@constants/timers";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const RegistrationConfirm = () => {
  const [email, { isSuccess, isError, error }] = useResendEmailMutation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { showNotification } = useNotification();
  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";
  const emailString = useSelector((state: RootState) => state.users.email);
  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, BUTTON_DISABLE);
  }, [isButtonDisabled]);

  useEffect(() => {
    isError && showNotification(errorMessage, "error");
    isSuccess && showNotification("Message sent to you mail", "success");
  }, [isSuccess, isError]);

  const onSubmit = () => {
    email(emailString);
    setIsButtonDisabled(true);
  };

  return (
    <section>
      <AuthCard>
        <StyledInfo>
          <Logo />

          <MainHeader>Thank you for Registering</MainHeader>

          <StyledDescription>
            Thank you for registering on the portal! We are sure that together
            with you we can be even better. We have sent a letter confirming
            your registration to the specified email. If you didn't receive it,
            please check your spam folder or click the "Send again" button
            below.
          </StyledDescription>
        </StyledInfo>
        <OutlinedButton
          type="submit"
          onClick={onSubmit}
          disabled={isButtonDisabled}
        >
          Send mail again
        </OutlinedButton>
      </AuthCard>
    </section>
  );
};

export default RegistrationConfirm;
