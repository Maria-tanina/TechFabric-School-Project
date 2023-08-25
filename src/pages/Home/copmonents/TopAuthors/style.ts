import styled from "styled-components";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

export const StyledTopAuthorName = styled(CardHeader)(
  ({ theme: { colors, media } }) => `
  &.MuiCardHeader-root {
    padding: 0;
    
    &:not(:last-child) {
      margin-bottom: 28px;
    }

    .MuiTypography-root {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      color: ${colors.black}
      ${media.desktop}{
        font-size: 24px;
        line-height: 36px;
      }
      
    }
  }
`
);

export const StyledTopAuthorAvatar = styled(Avatar)(
  ({ theme: { colors, media } }) => `
  &.MuiAvatar-root {
    width: 40px;
    height: 40px;
    background-color: ${colors.main};
    ${media.desktop}{
      width: 72px;
      height: 72px;
    }
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
