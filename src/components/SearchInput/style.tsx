import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const SearchInputStyle = styled(Autocomplete)(
  ({ theme: { media } }) => `
   &.MuiAutocomplete-root{
    width: 58%;
   .MuiOutlinedInput-root .MuiAutocomplete-input{
    padding: 0;
  }
  }
  
  .MuiInputBase-root {
    ${media.desktop} {
      width: 100%;
    }
  }
`
);
