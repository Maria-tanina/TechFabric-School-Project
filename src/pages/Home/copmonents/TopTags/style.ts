import styled from "styled-components";

export const StyledTag = styled.div(
  ({ theme: { fontSizes, media } }) => `
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  text-decoration-line: underline;
  ${media.desktop}{
    font-size: ${fontSizes.sidebarTag};
  }
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
);
