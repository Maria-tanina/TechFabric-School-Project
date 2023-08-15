import styled from "styled-components";
import {TextField} from "@mui/material";

export const SearchInputStyle = styled(TextField)(({theme: {media}}) => `
  .MuiInputBase-root {
    ${media.desktop} {
      width: 420px;
    }
  }
`);
