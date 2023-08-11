import styled from "styled-components";
import {Button} from "@mui/material";


export const OutlinedButton = styled(Button)<{$width?: string}>(({theme: {colors}, $width}) =>`
  &.MuiButton-root{
    border: 2px solid ${colors.main};
    color: ${colors.main};
    background-color: transparent;
    width: ${$width || "100%"};
    
    a {
      line-height: 24px;
      width: 100%;
    }
    
    &:hover {
      background-color: ${colors.main};
      color: ${colors.white}
    }
  }
`);