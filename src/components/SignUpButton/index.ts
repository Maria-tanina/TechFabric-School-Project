import styled from "styled-components";
import { Button } from "@mui/material";

export const SignUpButton = styled(Button)(
  ({ theme: { colors } }) => `
  &.MuiButton-root {
    color: ${colors.white};
    background-color: ${colors.graphite};
    
    &:hover {
      background-color: ${colors.black};
    }
  }
`
);
