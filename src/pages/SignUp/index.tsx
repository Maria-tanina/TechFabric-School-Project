import {
  StyledDecoration,
  StyledDescription,
  StyledInfo,
  StyledLine,
  StyledLogo,
  StyledLogoSpan,
} from "@pages/SignUp/style";
import { GhostButton } from "@components/GhostButton";
import RegistrationForm from "@features/registration/components/RegistrationForm";
import { Link } from "react-router-dom";
import Logo from "@components/Logo";
import { LOGIN_PATH } from "@constants/paths";
import { AuthCard } from "@components/AuthCard";
import { MainHeader } from "@components/MainHeader";

const SignUp = () => {
  return (
    <section>
      <AuthCard>
        <StyledInfo>
          <Logo />

          <MainHeader>
            Welcome to the{" "}
            <StyledLogo>
              power<StyledLogoSpan>up</StyledLogoSpan>
            </StyledLogo>
            !
          </MainHeader>

          <StyledDescription>
            We are the largest society of sport enthusiasts. Here you are sure
            to find like-minded people! To create an account, choose to register
            via social network or e-mail.
          </StyledDescription>
        </StyledInfo>

        <RegistrationForm />

        <StyledDecoration>
          <StyledLine />
          <span>or</span>
          <StyledLine />
        </StyledDecoration>

        <GhostButton>
          <Link to={LOGIN_PATH}>Log In</Link>
        </GhostButton>
      </AuthCard>
    </section>
  );
};

export default SignUp;
