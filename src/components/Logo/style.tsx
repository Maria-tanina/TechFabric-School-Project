import styled, {css} from "styled-components";
import theme from "@styles/theme";
import {Link} from "react-router-dom";



export const LogoStyle =styled(Link)<{ isFooter: boolean }>`
  font-size: ${theme.fontSizes.logo};
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  line-height: 36px;

  ${(props) =>
          css`
            color: ${props.isFooter ? theme.colors.white : theme.colors.black};
          `
  }
  & span {
    color: ${theme.colors.main};
`
