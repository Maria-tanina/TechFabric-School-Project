import styled from "styled-components";
import { Button } from "@mui/material";

export const CommentButton = styled(Button)(
  ({ theme: { colors } }) => `
  &.MuiButton-root.MuiButtonBase-root {
    font-size: 16px;
    min-width: 32px;
    font-weight: 400;
    line-height: 24px;
    gap: 12px;
    background-color: transparent;
    transition: .4s ease-in-out;
    position: relative;
    padding: 0;
    color: ${colors.black};
    
    &:hover {
      .favoriteFilledHoverIcon {
        opacity: 1;
      }
    }
    
    svg {
      padding: 5px 4px;
      height: 42px;
      width: 42px;
      border-radius: 6px;
      transition: .4s ease-in-out;
    }
    svg path {
      transition: .4s ease-in-out;
    }
    &:hover {
      background-color: transparent;
      svg {
      background-color:  ${colors.lightYellow};
      }
      svg path {
        fill: ${colors.main};
      }
    }
    &.MuiButton-root.Mui-disabled{
      background-color: transparent;
      color: #e5e2e2;
      svg path {
        fill: #e5e2e2;
      }
    }
  }
`
);
