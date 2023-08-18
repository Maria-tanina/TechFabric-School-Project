import styled from "styled-components";

export const StyledSidebarCard = styled.div(({ theme: { colors, fontSizes } }) =>`
  border-radius: 8px;
  border: 2px solid ${colors.strokeGray};
  background: ${colors.white};
  padding: 32px 24px;
`);
