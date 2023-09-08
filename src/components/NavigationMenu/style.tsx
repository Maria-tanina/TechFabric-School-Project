import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
    min-width: fit-content;
    ${media.desktop} {
        min-width: 35px;
    }
  }
  }
  
`
);

export const MenuLink = styled(NavLink)(
  ({ theme: { colors, fontSizes, media } }) => `
  display: flex;
  color: ${colors.graphite};
  font-size: 0;
  line-height: 24px;
  font-weight: 500;
  width: auto;
  padding: 10px 12px;
  .MuiSvgIcon-root{
    color: ${colors.graphite};
    font-weight: 700;
  }
  &.active { 
      svg{
        color: ${colors.white}; 
      }
      border-radius: 5px;
      color: ${colors.white}; 
      background-color: ${colors.main}; 
    }
  ${media.desktop} {
    font-size: ${fontSizes.button};
    width: 100%;
  }
`
);

export const MenuButton = styled.div(
  ({ theme: { colors, fontSizes, media } }) => `
  display: flex;
  color: ${colors.graphite};
  font-size: 0;
  line-height: 24px;
  font-weight: 500;
  width: auto;
  padding: 10px 12px;
  
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

export const MenuHeading = styled.h2(
  ({ theme: { colors, fontSizes, media } }) => `
  color: ${colors.black};
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align:center;
  ${media.desktop}{
    font-size: ${fontSizes.secondaryHeader};
    text-align:left;
    line-height: 36px;
  }
`
);
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 43px;
`;
