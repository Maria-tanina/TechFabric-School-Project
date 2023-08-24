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

const RegistrationConfirm = () => {
  const storage = LSService();

  const emailString = storage.get("email") as string;

  const [email] = useResendEmailMutation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 30000);
  }, [isButtonDisabled]);

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
