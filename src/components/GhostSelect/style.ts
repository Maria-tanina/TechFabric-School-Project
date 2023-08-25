import styled from "styled-components";
import { SelectProps } from "@mui/material";
import { CustomSelect } from "@components/Select";

export const StyledGhostSelect = styled(CustomSelect)<SelectProps>(
  ({ theme: { colors }, open }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    width: 180px;
    border: 2px solid ${open ? colors.main : "transparent "};
  }
`
);
