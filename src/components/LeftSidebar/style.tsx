import styled from "styled-components";

export const LeftSidebarWrap = styled.div(
  ({ theme: { media } }) => `
  max-width: 200px;
  width: auto;
  position: sticky;
  top: 15px;
  flex-shrink: 2;
  ${media.desktop} {
    width: 100%;
  }
`
);
