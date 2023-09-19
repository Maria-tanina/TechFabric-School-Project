import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
`;

export const MainContent = styled.main(
  ({ theme: { colors, media, paddings } }) => `
  display:flex;
  justify-content:space-between;
  padding: ${paddings.tabletMainPadding};
  flex: 1 0 auto;
  gap: 20px;
  background: ${colors.lightGray};
  ${media.desktop}{
    padding: ${paddings.mainPadding};
  }
`
);
