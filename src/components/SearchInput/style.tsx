import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const SearchInputStyle = styled(Autocomplete)(
  ({ theme: { media } }) => `
   &.MuiAutocomplete-root{
    width: 50%;
    .MuiFormControl-root {
        .MuiInputBase-root.MuiOutlinedInput-root,.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon{
            padding-right: 9px;
        }
    }
   
    .MuiInputBase-root .MuiAutocomplete-input{
        padding: 0;
    }
  }
  .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon{
    padding-right: 9px;
  }
  .MuiInputBase-root {
    ${media.desktop} {
      width: 100%;
    }
  }
`
);
