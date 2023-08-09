import styled from "styled-components";
import theme from "@styles/theme";
import {Link} from "react-router-dom";


export const LogoStyle =styled(Link)`
  font-size: ${theme.fontSizes.logo};
  color: ${theme.colors.black};
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
}

& span {
  color: ${theme.colors.main};

  
`
