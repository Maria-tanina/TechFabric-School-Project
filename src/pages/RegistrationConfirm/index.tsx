import Logo from "@components/Logo";
import { AuthCard } from "@components/AuthCard";
import { OutlinedButton } from "@components/OutlinedButton";
import {
  StyledDescription,
  StyledInfo,
} from "@pages/RegistrationConfirm/style";
import { MainHeader } from "@components/MainHeader";
import { useResendEmailMutation } from "@services/authApi";
import { LSService } from "@services/localStorage";
import { useEffect, useState } from "react";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const RegistrationConfirm = () => {
  const [email, { isSuccess, isError, error }] = useResendEmailMutation();
  const storage = LSService();
  const emailString = storage.get("email") as string;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { showNotification } = useNotification();
  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 30000);
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
