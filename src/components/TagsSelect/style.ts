import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledTagsSelect = styled(TextField)(
  ({ theme: { colors } }) => `
  .MuiInputBase-root.MuiInputBase-formControl.MuiAutocomplete-inputRoot {
    border: none;
    color: ${colors.black};
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    height: auto;
    
    &:hover {
      background-color: transparent;
      color: ${colors.black};
      border: none;
      svg {
        fill: ${colors.gray};
      }
    }
    
    .MuiChip-root {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      border-radius: 8px;
      background-color: ${colors.lightYellow};
      svg {
        font-size: 24px;
        margin: 0 8px 0 -6px;
        path {
          fill: ${colors.black};
        }
      }
      
      .MuiChip-label {
        padding-left: 8px;
      }
    }
  }
`
);
