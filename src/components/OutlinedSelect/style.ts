import styled from "styled-components";
import { FormControl, InputLabel } from "@mui/material";
import { CustomSelect } from "@components/Select";

export const StyledOutlinedSelect = styled(CustomSelect)(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    color: ${open ? colors.black : colors.gray};
    border: 2px solid ${open ? colors.main : colors.strokeGray};
    
     &:hover {
      background-color: rgba(254, 222, 36, 0.1);
      color: ${colors.main};
      border: 2px solid transparent;
      svg {
        fill: ${colors.main};
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
