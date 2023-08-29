import styled from "styled-components";
import { TextField, TextFieldProps } from "@mui/material";

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme: { colors, fonts }, value }) => `
  color: ${colors.black};
  
  .MuiInputBase-input {
    padding: 10px 16px 10px 0;
    line-height: 24px;
    font-family: ${fonts.main}
  }
  
  .MuiInputBase-root {
    padding-left: 16px;
  }
  
  .MuiInputBase-input::placeholder {
    color: ${colors.gray};
    opacity: 1;
    font-size: 15px;
    font-weight: 500;
  }
  
  fieldset {
    border-width: 2px;
    transition: all 0.3s;
  }
  
  .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.strokeGray};
    border-radius: 8px;
  }
  
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: color: ${colors.black};
  }
    
  &.Mui-focused{
    svg path {
       fill: ${colors.black};
    }
    .MuiInputBase-input::placeholder {
      color: transparent;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.main};
    }
    &.Mui-error fieldset{
    border-color: ${colors.error};
    }
  }
    
  &.Mui-error {
    svg path  {
      fill: ${colors.black};
    } 
    fieldset {
      border-color: ${colors.error};
    }
  }
    
  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.gray};
    }
    &.Mui-focused fieldset {
      border-color: ${colors.main};
    }
    &.Mui-error fieldset {
      border-color: ${colors.error};
    }  
  }
  
  .MuiFormHelperText-root.Mui-error {
    color: ${colors.error};
   }
  
  svg  {
    path {
      fill:  ${value ? colors.black : colors.gray}
    } 
  }
`
);
