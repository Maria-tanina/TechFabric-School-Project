import {
  SignupWrapper,
  StyledCard,
  StyledCardContainer,
  StyledDecoration,
  StyledDescription,
  StyledInfo,
  StyledLogo,
  StyledLogoSpan,
  StyledTitle
} from "@pages/SignUp/style";
import {GhostButton} from "@components/Buttons";
import RegistrationForm from "@features/registration/components/RegistrationForm";
import {Link} from "react-router-dom";
import Logo from "@components/Logo";


const SignUp = () => {
  return(
      <section>
        <SignupWrapper>
          <StyledCard>
            <StyledCardContainer>
              <StyledInfo>
                <Logo/>
                <StyledTitle>
                  Welcome to the <StyledLogo>power<StyledLogoSpan>up</StyledLogoSpan></StyledLogo>!
                </StyledTitle>

                <StyledDescription>
                  We are the largest society of sport enthusiasts. Here you are sure to find like-minded people! To create an account, choose to register via social network or e-mail.
                </StyledDescription>
              </StyledInfo>

              <RegistrationForm/>

              <StyledDecoration>
                or
              </StyledDecoration>

              <GhostButton>
                <Link to="/login">
                  Log In
                </Link>
              </GhostButton>
            </StyledCardContainer>
          </StyledCard>
        </SignupWrapper>
      </section>
  )
}

export default SignUp;