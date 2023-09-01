import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

interface OutlinedButtonProps extends ButtonProps {
  $width?: string;
}

export const OutlinedButton = styled(Button)<OutlinedButtonProps>(
  ({ theme: { colors }, $width }) => `
  &.MuiButton-root{
    border: 2px solid ${colors.main};
    color: ${colors.main};
    background-color: transparent;
    width: ${$width || "100%"};
    
    &:hover {
      background-color: ${colors.main};
      color: ${colors.white}
    }
  }
`
);
