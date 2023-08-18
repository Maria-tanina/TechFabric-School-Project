import styled from "styled-components";
import {Link} from "react-router-dom";
import {MenuItem} from "@mui/material";

export const NavigateWrap = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 43px;
  max-width: 240px;
`;
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const MenuItemStyle = styled(MenuItem)(
    ({theme: {colors}}) => `
  &.MuiMenuItem-root {
    padding: 0;
    &:hover{
    background-color: ${colors.lightOrange};
    a,svg{
        color:  ${colors.main};
      }
    }
    span{
        color:  ${colors.white};
    }
  }
`
);

export const MenuLink = styled(Link)(
    ({theme: {colors, fontSizes}}) => `
  display: flex;
  color: ${colors.graphite};
  font-size: ${fontSizes.button};
  line-height: 24px;
  font-weight: 500;
  width: 100%;
  padding: 10px 12px;
  .MuiSvgIcon-root{
    color: ${colors.graphite};
    font-weight: 700;
  }
`
);

export const MenuWrap = styled.div`
  width: 100%;
`;

export const MenuHeading = styled.h2(
    ({theme: {colors, fontSizes}}) => `
  color: ${colors.black};
  font-size: ${fontSizes.secondaryHeader};
  line-height: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`
);
