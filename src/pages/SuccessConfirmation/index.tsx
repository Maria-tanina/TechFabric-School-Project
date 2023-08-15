import {
  StyledDescription,
  StyledInfo
} from "@pages/SuccessConfirmation/style";
import Logo from "@components/Logo";
import {AuthCard} from "@components/AuthCard";
import {OutlinedButton} from "@components/OutlinedButton";
import {Link} from "react-router-dom";
import {LOGIN_PATH} from "@constants/paths";
import {MainHeader} from "@components/MainHeader";

const SuccessConfirmation = () => {
  return(
      <section>
        <AuthCard>
          <StyledInfo>
            <Logo/>
            <MainHeader>
              Registration confirmed
            </MainHeader>

            <StyledDescription>
              Thank you, your registration has been successfully confirmed!
            </StyledDescription>
          </StyledInfo>

          <OutlinedButton>
            <Link to={LOGIN_PATH}>              Back to Login In
            </Link>
          </OutlinedButton>
        </AuthCard>
      </section>
  )
}

export default SuccessConfirmation;
