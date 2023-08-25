import styled from "styled-components";
import { Button } from "@mui/material";

export const GhostButton = styled(Button)<{ $width?: string }>(
  ({ theme: { colors }, $width }) => `
  &.MuiButton-root{
    color: ${colors.graphite};
    background-color: transparent;
    width: ${$width || "100%"};
    
    &:hover {
      background-color: ${colors.main};
      color: ${colors.white};
    }
  }
`
);
