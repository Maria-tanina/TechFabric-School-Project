import styled from "styled-components";
import { MenuItem } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)(
  ({ theme: { colors } }) => `
  &.MuiButtonBase-root.Mui-focusVisible {
    background-color: ${colors.white};
  }
`
);
