import styled from "styled-components";
import { FormControl, InputLabel, InputLabelProps } from "@mui/material";
import { CustomSelect } from "@components/Select";

export const StyledOutlinedSelect = styled(CustomSelect)(
  ({ theme: { colors }, open}) => `
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

interface ILabelProps extends InputLabelProps {
  value: string;
}

export const StyledLabel = styled(InputLabel)<ILabelProps>(
  ({ theme: { colors } }) => `
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.gray};
    font-size: 15px;
    top: -4px;
  }
`
);

export const StyledFormControl = styled(FormControl)(({theme: {colors}}) => `
  max-width: 40%;
  width: 100%;
  &:hover {
    .MuiFormLabel-root.MuiInputLabel-root {
      color: ${colors.main};
    } 
  }
`);
