import styled from "styled-components";
import { TextField } from "@mui/material";

export const SearchInputStyle = styled(TextField)(
  ({ theme: { media } }) => `
  &.MuiFormControl-root.MuiTextField-root{
    width: 58%;
  }
  
  .MuiInputBase-root {
    ${media.desktop} {
      width: 100%;
    }
  }
`
);
