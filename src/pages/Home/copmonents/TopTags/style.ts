import styled from "styled-components";

export const StyledTag = styled.div(
  ({ theme: { fontSizes } }) => `
  font-size: ${fontSizes.sidebarTag};
  font-weight: 600;
  line-height: 30px;
  text-decoration-line: underline;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
);
