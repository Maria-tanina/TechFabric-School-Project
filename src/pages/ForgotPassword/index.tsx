import { AuthCard } from "@components/AuthCard";
import { StyledDescription, StyledInfo } from "@pages/ForgotPassword/style";
import { ForgotPasswordForm } from "@features/forgotPassword/components/ForgotPasswordForm";
import { SecondaryHeader } from "@components/SecondaryHeader";

export const ForgotPassword = () => {
  return (
    <section>
      <AuthCard $width="800px">
        <StyledInfo>
          <SecondaryHeader>Forgot Your Password?</SecondaryHeader>

          <StyledDescription>
            You need to enter your email to recover your password. We will send
            an instruction with password recovery to your e-mail.
          </StyledDescription>
        </StyledInfo>

        <ForgotPasswordForm />
      </AuthCard>
    </section>
  );
};
