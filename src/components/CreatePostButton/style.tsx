import { OutlinedButton } from "@components/OutlinedButton";
import styled from "styled-components";

export const ButtonStyle = styled(OutlinedButton)(
  ({ theme: { media } }) => `
  &.MuiButton-root{
    width: 140px;
    margin-right: 18px;
    ${media.desktop}{
      width: 240px;
    }
  }
`
);
