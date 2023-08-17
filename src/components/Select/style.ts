import styled from "styled-components";
import { Select, SelectProps } from "@mui/material";

export const StyledSelect = styled(Select)<SelectProps>(
  ({ theme: { colors } }) => `
  &.MuiInputBase-root {
    width: 180px;
    border: none !important;
    color: ${colors.gray};
    &:hover {
      background-color: rgba(254, 222, 36, 0.1);
      color: ${colors.main};
    }
    
    
   .MuiButtonBase-root {
     &:hover {
        background-color: transparent;
      }
   }
  }
  
`
);
