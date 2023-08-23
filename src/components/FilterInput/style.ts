import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledFilterInput = styled(TextField)`
  &.MuiFormControl-root {
    max-width: 40%;
    width: 100%;
  }
`;

export default StyledFilterInput;
