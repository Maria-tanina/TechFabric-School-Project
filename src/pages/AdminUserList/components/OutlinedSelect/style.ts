import styled from "styled-components";
import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";

export const StyledOutlinedSelect = styled(Select)<SelectProps>(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    color: ${open ? colors.black : colors.gray};
    border: 2px solid ${open ? colors.main : colors.strokeGray};
    
    svg {
      fill: ${open ? colors.black : colors.gray};
      transform: ${open ? "rotate(90deg)" : ""};
    }
    
    &:hover {
      border: 2px solid ${colors.gray};
      svg {
        fill: ${colors.gray};
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
  ({ theme: { colors } }) => `
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.gray};
    top: -4px;
  }
`
);

export const StyledFormControl = styled(FormControl)`
  max-width: 40%;
  width: 100%;
`;
