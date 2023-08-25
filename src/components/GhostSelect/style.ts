import styled from "styled-components";
import { InputLabel, SelectProps } from "@mui/material";
import { CustomSelect } from "@components/Select";

export const StyledGhostSelect = styled(CustomSelect)<SelectProps>(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    width: 180px;
    border: 2px solid ${open ? colors.main : "transparent "};
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
