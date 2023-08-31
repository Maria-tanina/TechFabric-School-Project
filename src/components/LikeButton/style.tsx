import styled from "styled-components";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)(
  ({ theme: { colors } }) => `
  &.MuiButtonBase-root {
    height: 32px;
    width: 32px;
    border-radius: 6px;
    transition: all 0.4s ease-in-out;
    
    &:hover {
      background: rgba(254, 222, 36, 0.1);
    }
    
    &:active {
      background-color: transparent;
    }
    
    .MuiSvgIcon-root {
      transition: fill 0.4s ease-in-out;
      fill: ${colors.black};
    }

    .favorite-icon {
      display: none;
      fill: ${colors.main};
    }

    &:hover .favorite-border-icon {
      display: none;
    }

    &:hover .favorite-icon {
      display: block;
    }
  }
`
);
