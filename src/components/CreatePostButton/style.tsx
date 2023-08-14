import {OutlinedButton} from "@components/OutlinedButton";
import styled from "styled-components";

export const ButtonStyle = styled(OutlinedButton)`
  &.MuiButton-root{
    width: 140px;
    ${({theme: {media: {desktop}}}) => desktop} {
      width: 240px;
    }
  }
`
