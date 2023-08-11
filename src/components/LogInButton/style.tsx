import styled from "styled-components";
import {GhostButton} from "@components/GhostButton";


export const LogInButtonStyle = styled(GhostButton)`
  &.MuiButton-root{
    width: 100px;
    ${({theme: {media: {desktop}}}) => desktop} {
      width: 200px;
    }
  }
`


