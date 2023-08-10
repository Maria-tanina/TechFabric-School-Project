import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    vertical-align: baseline;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.black};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .MuiFormControl-root {
    .MuiInputBase-root {
      font-family: ${theme.fonts.main};
      font-weight: 500;
      border: 2px solid ${theme.colors.strokeGray};
      border-radius: 8px;
      padding: ${theme.paddings.inputPadding};
      color: ${theme.colors.black};

      &:hover {
        border-color: ${theme.colors.gray};
      }

      &.Mui-focused {
        border-color: ${theme.colors.main};

        & .MuiSvgIcon-root {
          color: ${theme.colors.graphite};
        }
      }


      &.Mui-error {
        border-color: ${theme.colors.error};
      }

      &:hover {
        &.Mui-error {
          border-color: ${theme.colors.error};
        }
      }
    }

    .MuiFormHelperText-root.Mui-error {
      color: ${theme.colors.error};
    }

    .MuiOutlinedInput-notchedOutline {
      border: 0;
      border-radius: 0;
    }

    .MuiSvgIcon-root {
      font-size: 30px;
      color: ${theme.colors.gray};
      font-weight: 200;
    }

    .MuiInputBase-input {
      padding: 0;

      &::placeholder {
        color: ${theme.colors.gray};
        opacity: 1;
      }
    }
  }


`;

export default GlobalStyles;
