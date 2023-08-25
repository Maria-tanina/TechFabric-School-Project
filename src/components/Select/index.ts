import styled from "styled-components";
import { InputLabel, Select } from "@mui/material";

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

export const StyledLabel = styled(InputLabel)(
  ({ theme: { colors, media } }) => `
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.gray};
    top: -4px;
    font-size: 13px;
    margin-top: 2px;
    ${media.desktop} {
        font-size: 15px;
        margin-top: 0;
    }
  }
`
);
