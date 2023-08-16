import {AuthCard} from "@components/AuthCard";
import {
  StyledDecoration,
  StyledDescription,
  StyledInfo,
  StyledLogo,
  StyledLogoSpan,
  StyledLine, StyledLink,
} from "@pages/Login/style";
import Logo from "@components/Logo";
import {SIGNUP_PATH} from "@constants/paths";
import {LoginForm} from "@features/login/components/LoginForm";
import {SignUpButton} from "@components/SignUpButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {MainHeader} from "@components/MainHeader";

export const Login = () => {
  return(
    <section>
      <AuthCard>
        <StyledInfo>
          <Logo/>

          <MainHeader>Welcome to the <StyledLogo>power<StyledLogoSpan>up</StyledLogoSpan></StyledLogo>!</MainHeader>

          <StyledDescription>
            We are the largest society of sport enthusiasts. Here you are sure to find like-minded people! To create an account, choose to register via social network or e-mail.
          </StyledDescription>
        </StyledInfo>

        <LoginForm/>

        <StyledDecoration>
          <StyledLine/>
          <span>Don’t have an account?</span>
          <StyledLine/>
        </StyledDecoration>

        <SignUpButton
          fullWidth
          type="button"
        >
          <StyledLink to={SIGNUP_PATH} reloadDocument>
            <MailOutlineIcon sx={{ mr: '8px' }} />
            Sign up with Email
          </StyledLink>
        </SignUpButton>
      </AuthCard>
    </section>
  )
}
