import { AuthCard } from "@components/AuthCard";
import { PasswordRecoveryForm } from "@features/passwordRecovery/components/PasswordRecoveryForm";
import { StyledInfo } from "@pages/PasswordRecovery/style";
import { SecondaryHeader } from "@components/SecondaryHeader";

export const PasswordRecovery = () => {
  return (
    <section>
      <AuthCard $width="800px">
        <StyledInfo>
          <SecondaryHeader>Password Recovery</SecondaryHeader>
        </StyledInfo>

        <PasswordRecoveryForm />
      </AuthCard>
    </section>
  );
};
