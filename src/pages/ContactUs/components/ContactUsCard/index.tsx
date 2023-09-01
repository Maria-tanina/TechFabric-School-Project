import { FC, ReactNode } from "react";
import { ContactFormWrapper } from "./style";
import { StyledCard, StyledCardContainer } from "@components/AuthCard/style";

export const ContactUsCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ContactFormWrapper>
      <StyledCard>
        <StyledCardContainer>{children}</StyledCardContainer>
      </StyledCard>
    </ContactFormWrapper>
  );
};
