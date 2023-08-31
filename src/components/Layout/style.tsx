import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const MainContent = styled.main(
  ({ theme: { colors, media, paddings } }) => `
  display:flex;
  justify-content:space-between;
  padding: ${paddings.tabletMainPadding};
  flex: 1 0 auto;
  background: ${colors.lightGray};
  ${media.desktop}{
    padding: ${paddings.mainPadding};
  }
`
);
