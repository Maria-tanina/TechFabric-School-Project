import styled from "styled-components";
import { OutlinedButton } from "@components/OutlinedButton";

export const ButtonStyle = styled(OutlinedButton)(
  ({ theme: { media } }) => `
  &.MuiButton-root{
    width: 100px;
    ${media.desktop}{
      width: 200px;
    }
  }
`
);
