import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

interface OutlinedButtonProps extends ButtonProps {
  $width?: string;
  $color?: string;
  $border?: string;
  $hover?: string;
}

export const OutlinedButton = styled(Button)<OutlinedButtonProps>(
  ({ theme: { colors }, $width, $color, $border, $hover }) => `
  &.MuiButton-root{
    border: 2px solid ${$border || colors.main};
    color: ${$color || colors.main};
    background-color: transparent;
    width: ${$width || "100%"};
    
    &:hover {
      background-color: ${$hover || colors.main};
      color: ${colors.white}
    }
  }
`
);
