import styled from "styled-components";
import { InputLabel, Select, SelectProps } from "@mui/material";

export const StyledSelect = styled(Select)<SelectProps>(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    width: 180px;
    color: ${open ? colors.black : colors.gray};
    border: 2px solid ${open ? colors.main : "transparent "};
    
    svg {
      fill: ${open ? colors.black : colors.gray};
      transform: ${ open ? "rotate(90deg)" : ""} !important;
    }
    
    &:hover {
      background-color: rgba(254, 222, 36, 0.1);
      color: ${colors.main};
      border: 2px solid ${colors.main};
      svg {
        fill: ${colors.main};
      }
    }
   
    
   .MuiButtonBase-root {
     &:hover {
        background-color: transparent;
      }
   }
  }
`
);

export const StyledLabel = styled(InputLabel)(({theme: {colors}}) =>`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.gray};
    top: -4px;
  }
`)
