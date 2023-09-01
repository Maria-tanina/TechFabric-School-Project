import styled from "styled-components";

export const StyledSidebarCard = styled.div(
  ({ theme: { colors, media } }) => `
  border-radius: 8px;
  border: 2px solid ${colors.strokeGray};
  background: ${colors.white};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${media.desktop}{
    gap: 28px;
  }
`
);
