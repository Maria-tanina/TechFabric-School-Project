import styled from "styled-components";

export const LeftSidebarWrap = styled.div(
  ({ theme: { media } }) => `
  max-width: 200px;
  width: auto;
  position: sticky;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 43px;
  flex-shrink: 2;
  ${media.desktop} {
    width: 100%;
  }
`
);
