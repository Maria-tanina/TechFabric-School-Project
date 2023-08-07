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
  }
`;

export default GlobalStyles;
