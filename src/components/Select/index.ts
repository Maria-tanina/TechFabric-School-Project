import styled from "styled-components";
import { Select } from "@mui/material";

export const CustomSelect = styled(Select)(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    color: ${open ? colors.black : colors.gray};
    
    svg {
      fill: ${open ? colors.black : colors.gray};
      transform: ${open ? "rotate(90deg)" : ""};
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