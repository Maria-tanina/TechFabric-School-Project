import styled from "styled-components";
import {OutlinedButton} from "@components/OutlinedButton";


export const ButtonStyle = styled(OutlinedButton)`
  &.MuiButton-root{
    width: 100px;
    ${({theme: {media: {desktop}}}) => desktop} {
      width: 200px;
    }
  }
`
