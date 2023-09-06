import styled from "styled-components";
import { GhostButton } from "@components/GhostButton";

export const SecondButton = styled(GhostButton)(
  ({ theme: { colors } }) => `
  &.MuiButton-root{
    border: 2px solid ${colors.strokeGray};
    &:hover {
    border: 2px solid transparent;
    }
  }
`
);
