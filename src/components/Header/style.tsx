import styled from "styled-components";
import theme from "@styles/theme";


export const HeaderWrapper = styled.header`
  background: ${theme.colors.white};
  padding: ${theme.paddings.headerPadding};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLeftSide = styled.div`
  display: flex;
  gap: 60px;
`
export const HeaderRightSide = styled.div`
  display: flex;
  gap: 12px;
`
