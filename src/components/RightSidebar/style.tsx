import styled from "styled-components";

export const RightSidebarWrap = styled.div(
  ({ theme: { media } }) => `
  position: sticky;
  top: 15px;
  max-width: 340px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 2;

  ${media.desktopLarge}{
        width: 100%;
    }
`
);
