import {AuthWrapper, StyledCard, StyledCardContainer} from "@components/AuthCard/style";
import {FC, ReactNode} from "react";

interface IAuthCardProps {
  children: ReactNode
}

export const AuthCard: FC<IAuthCardProps> = ({children}) => {
  return(
    <AuthWrapper>
      <StyledCard>
        <StyledCardContainer>
          {children}
        </StyledCardContainer>
      </StyledCard>
    </AuthWrapper>
  )
}