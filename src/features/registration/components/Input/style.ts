import styled from "styled-components";
import {TextField} from "@mui/material";

export const StyledTextField = styled(TextField)(({theme: {colors}}) =>`
  color: ${colors.black};
  .MuiSvgIcon-root {
    color: ${colors.gray};
    width: 24px;
    height: 24px;
  }
  
  .MuiInputBase-input {
    padding: 10px 16px 10px 0;
    line-height: 24px;
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
  
  & label.Mui-focused {
    color: ${colors.main};
  }
  
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: color: ${colors.black};
    }
    
    &.Mui-focused{
      .MuiSvgIcon-root {
        color: ${colors.black};
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
    
    &.Mui-error fieldset{
      border-color: ${colors.error};
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
  }
  
  .MuiFormHelperText-root.Mui-error {
      color: ${colors.error};
   }
`);