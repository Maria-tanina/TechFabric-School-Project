import { AuthCard } from "@components/AuthCard";
import { StyledInfo } from "@pages/PublishSuccess/style";
import Logo from "@components/Logo";
import { MainHeader } from "@components/MainHeader";
import { StyledDescription } from "@pages/SuccessConfirmation/style";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import { OutlinedButton } from "@components/OutlinedButton";

export const PublishSuccessPage = () => {
  return (
    <section>
      <AuthCard>
        <StyledInfo>
          <Logo />

          <MainHeader>Article was Published</MainHeader>
          <StyledDescription>Great job!</StyledDescription>
          <StyledDescription>
            Your article was successfully published. We need some time for it to
            appear on the site.
          </StyledDescription>
        </StyledInfo>
        <OutlinedButton>
          <Link to={HOME_PATH}> Back to Login In</Link>
        </OutlinedButton>
      </AuthCard>
    </section>
  );
};
