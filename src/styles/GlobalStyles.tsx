import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle(
  ({ theme: { fonts, colors, fontSizes, paddings, media } }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    vertical-align: baseline;
  }

  body {
    font-family: ${fonts.main};
    color: ${colors.black};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .MuiLinearProgress-root.MuiLinearProgress-colorPrimary{
     width: 50%;
     margin: 0 auto;
    background-color: ${colors.white}
  }
  .MuiLinearProgress-bar.MuiLinearProgress-barColorPrimary{
      background-color: ${colors.main}
  }
  .MuiButtonBase-root.MuiMenuItem-root {
     &.Mui-selected.MuiMenuItem-gutters, &.Mui-selected:hover {
      background-color: ${colors.lightYellow};
    }
    
  }
  .MuiButtonBase-root.MuiButton-root {
    text-transform: none;
    font-family: ${fonts.main};
    font-size: ${fontSizes.button};
    font-weight: 500;
    height: 44px;
    
    a {
      padding: 10px 5px;
      width: 100%;
    }
   
    gap: 22px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: none;
    line-height: 24px;
    transition: all 0.3s;
    
    &:hover {
      box-shadow: none;
    }
    
    svg {
      font-size: 24px;
    }
    
    span {
      margin: 0;
    }
  }
  
  main section {
    width: 100%
  }
  
  .MuiButtonBase-root.MuiButton-root:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    color: ${colors.white};
    opacity: 0.9;
    pointer-events: none;
  }

  .MuiFormControl-root {
    .MuiInputBase-root {
      font-family: ${fonts.main};
      font-weight: 500;
      font-size: 15px;
      border: 2px solid ${colors.strokeGray};
      border-radius: 8px;
      padding: ${paddings.inputPadding};
      color: ${colors.black};
      height: 44px;
      transition: all 0.3s;

      &:hover {
        border-color: ${colors.gray};
      }

      &.Mui-focused {
        border-color: ${colors.main};

        & .MuiSvgIcon-root {
          color: ${colors.graphite};
        }
      }
      
      &.Mui-error {
        border-color: ${colors.error};
      }

      &:hover {
        &.Mui-error {
          border-color: ${colors.error};
        }
      }
      
     input:-webkit-autofill,
     input:-webkit-autofill:hover, 
     input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 40rem #ffff inset;
     }
    }

    .MuiFormHelperText-root.Mui-error {
      color: ${colors.error};
    }

    .MuiOutlinedInput-notchedOutline {
      border: 0;
      border-radius: 0;
    }

    .MuiSvgIcon-root {
      font-size: 24px;
      color: ${colors.gray};
      font-weight: 200;
    }

    .MuiInputBase-input {
      padding: 0;

      &::placeholder {
        color: ${colors.gray};
        opacity: 1;
      }
    }
    .MuiInputBase-root.MuiInputBase-multiline {
      height: auto;
    }
  }
  
  .MuiPaper-root.MuiPaper-elevation {
    box-shadow: none;
    border-radius: 8px;
    border: 2px solid ${colors.strokeGray};
  }
  
  .MuiTable-root {
    .MuiTableCell-root {
      font-family: ${fonts.main};
      font-size: 14px;
      ${media.desktop} {
        font-size: 16px;
    }
    }
    
    .MuiTableBody-root .MuiTableCell-root {
      font-weight: 400;
      color: ${colors.black};
    }
    
    .MuiTableHead-root .MuiTableCell-root {
      font-weight: 700;
      color: ${colors.gray};
    }
  }
  .MuiCardMedia-root.MuiCardMedia-media{
     object-position: top;
  }
`
);

export default GlobalStyles;
