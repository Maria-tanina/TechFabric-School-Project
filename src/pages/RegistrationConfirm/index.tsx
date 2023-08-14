import Logo from "@components/Logo";
import {AuthCard} from "@components/AuthCard";
import {OutlinedButton} from "@components/OutlinedButton";
import {StyledDescription, StyledInfo, StyledTitle} from "@pages/RegistrationConfirm/style";

const RegistrationConfirm = () => {
  return(
      <section>
        <AuthCard>
          <StyledInfo>
            <Logo/>
            <StyledTitle>
              Thank you for Registering
            </StyledTitle>

            <StyledDescription>
              Thank you for registering on the portal! We are sure that together with you we can be even better.
              We have sent a letter confirming your registration to the specified email.
              If you didn't receive it, please check your spam folder or click the "Send again" button below.
            </StyledDescription>
          </StyledInfo>

          <OutlinedButton>
            Send mail again
          </OutlinedButton>
        </AuthCard>
      </section>
  )
}

export default RegistrationConfirm;
