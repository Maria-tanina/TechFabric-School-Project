import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  InputLabelProps,
  Select,
} from "@mui/material";

export const CustomSelect = styled(Select)(
  ({ theme: { colors }, open, value }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    color: ${open || value ? colors.black : colors.gray};
    
    svg {
      fill: ${open || value ? colors.black : colors.gray};
      transform: ${open ? "rotate(90deg)" : ""};
    }
    
    &:hover {
      background-color: rgba(254, 222, 36, 0.1);
      color: ${colors.main};
      border: 2px solid ${colors.main};
      svg {
        fill: ${colors.main};
      }
    }
   
   .MuiButtonBase-root {
     &:hover {
        background-color: transparent;
      }
   }
  }
`
);

interface ILabelProps extends InputLabelProps {
  value?: string;
}

export const StyledLabel = styled(InputLabel)<ILabelProps>(
  ({ theme: { colors, media }, value }) => `
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.gray};
    display: ${value ? "none" : "block"} ;
    top: -4px;
    font-size: 13px;
    margin-top: 2px;
    ${media.desktop} {
        font-size: 15px;
        margin-top: 0;
    }
  }
`
);

export const StyledFormControl = styled(FormControl)(
  ({ theme: { colors } }) => `
  &:hover {
    .MuiFormLabel-root.MuiInputLabel-root {
      color: ${colors.main};
    } 
    
    .MuiInputBase-root.MuiInputBase-formControl {
       background-color: rgba(254, 222, 36, 0.1);
      color: ${colors.main};
      border: 2px solid transparent;
      svg {
        fill: ${colors.main};
      }
    }
  }
`
);
