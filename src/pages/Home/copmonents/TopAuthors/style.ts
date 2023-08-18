import styled from "styled-components";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

export const StyledTopAuthorName = styled(CardHeader)(({theme: {colors}}) =>`
  &.MuiCardHeader-root {
    padding: 0;
    
    &:not(:last-child) {
      margin-bottom: 28px;
    }

    .MuiTypography-root {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      color: ${colors.black}
    }
  }
`);

export const StyledTopAuthorAvatar = styled(Avatar)(
  ({ theme: { colors } }) => `
  &.MuiAvatar-root {
    width: 72px;
    height: 72px;
    background-color: ${colors.main};
    
    a {
      flex-grow: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
);