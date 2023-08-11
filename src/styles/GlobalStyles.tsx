import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
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
  ul,ol{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
 
  .MuiButtonBase-root.MuiButton-root {
    text-transform: none;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.fontSizes.button};
    font-weight: 500;
    padding: ${(props) => props.theme.paddings.buttonPadding};
    gap: 22px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: none;
    line-height: normal;
    transition: all 0.3s;
    &:hover {
      box-shadow: none;
    }
    span {
      color: ${(props) => props.theme.colors.white};
      margin: 0;
      svg {
        height: 24px;
      }
    }
  }
  
  .MuiButtonBase-root.MuiButton-root:disabled {
    background-color: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.white};
    opacity: 0.9;
    pointer-events: none;
  }
`;

export default GlobalStyles;
