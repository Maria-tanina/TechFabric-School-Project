import styled from "styled-components";
import { GhostButton } from "@components/GhostButton";

export const LogInButtonStyle = styled(GhostButton)(
  ({ theme: { media } }) => `
  &.MuiButton-root{
    width: 100px;
    ${media.desktop}{
      width: 200px;
    }
  }
`
);
