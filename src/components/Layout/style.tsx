import styled from "styled-components";
import theme from "@styles/theme";


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`
export const MainContent = styled.main`
  padding: ${theme.paddings.tabletMainPadding};
  flex: 1 0 auto;
  background: ${theme.colors.lightGray};
  ${({theme: {media: {desktop}}}) => desktop} {
    padding: ${theme.paddings.mainPadding};
  }
`
