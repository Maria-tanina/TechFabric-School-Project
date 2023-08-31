import styled from "styled-components";

export const RightSidebarWrap = styled.div(
  ({ theme: { media } }) => `
  position: sticky;
  top: 15px;
  max-width: 380px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 2;
  ${media.desktop}{
    width: 100%;
    flex-shrink: 1;
  }
`
);
