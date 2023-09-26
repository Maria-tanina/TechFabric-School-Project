import styled from "styled-components";
import { MenuItem } from "@mui/material";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const MenuItemStyle = styled(MenuItem)(
  ({ theme: { colors, media } }) => `
  &.MuiMenuItem-root {
    padding: 0;
    justify-content: center;
    &:hover{
    border-radius: 5px;
    transition: .4s ease-in-out;
    background-color: ${colors.main};
    a,svg{
        color:  ${colors.white};
      }
    }
    span{
        color:  ${colors.white};
    }
      .MuiListItemIcon-root{
    ${media.desktop} {
        min-width: 35px;
    }
  }
  }
  
`
);

export const MenuButton = styled.div(
  ({ theme: { colors, fontSizes, media } }) => `
  display: flex;
  color: ${colors.graphite};
  line-height: 24px;
  font-weight: 500;
  padding: 10px 12px;
  &.active {
    border-radius: 5px;
    color: #FFFFFF;
    background-color: #FEDE24;
}
  
  &:hover{
    color: ${colors.white};
  }
  
  .MuiSvgIcon-root{
    color: ${colors.graphite};
    font-weight: 700;
  }
  
  ${media.desktop} {
    font-size: ${fontSizes.button};
    width: 100%;
  }
`
);

export const MenuWrap = styled.div`
  width: 100%;
`;
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 43px;
`;
