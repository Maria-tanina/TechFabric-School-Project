import styled from "styled-components";
import {TextField} from "@mui/material";

export const SearchInputStyle = styled(TextField)`
  .MuiInputBase-root {
    ${({theme: {media: {desktop}}}) => desktop} {
      width: 420px;
    }
  }
`
