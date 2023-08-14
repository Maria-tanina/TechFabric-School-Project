import styled from "styled-components";
import theme from "@styles/theme";


export const HeaderWrapper = styled.header`
  background: ${theme.colors.white};
  padding: ${theme.paddings.tabletHeaderPadding};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({theme: {media: {desktop}}}) => desktop} {
    padding: ${theme.paddings.headerPadding};
  }
`
export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  ${({theme: {media: {desktop}}}) => desktop} {
    gap: 60px;
  }
  
`
export const HeaderRightSide = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`
