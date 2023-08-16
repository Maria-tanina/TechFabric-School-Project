import {
  AuthWrapper,
  StyledCard,
  StyledCardContainer,
} from "@components/AuthCard/style";
import { FC, ReactNode } from "react";

interface IAuthCardProps {
  children: ReactNode;
  $width?: string;
}

export const AuthCard: FC<IAuthCardProps> = ({ children, $width }) => {
  return (
    <AuthWrapper $width={$width}>
      <StyledCard>
        <StyledCardContainer>{children}</StyledCardContainer>
      </StyledCard>
    </AuthWrapper>
  );
};
