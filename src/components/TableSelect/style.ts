import styled from "styled-components";
import { CustomSelect } from "@components/Select";

export const StyledTableSelect = styled(CustomSelect)(
  ({ theme: { colors, media } }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    border: none;
    color: ${colors.black};
    font-weight: 700;
    font-size: 14px;
    
     ${media.desktop} {
        font-size: 16px;
    }
    
    &:hover {
      background-color: transparent;
      color: ${colors.black};
      border: none;
      svg {
        fill: ${colors.gray};
      }
    }
  }
`
);
