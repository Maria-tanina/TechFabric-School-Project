import styled from "styled-components";

export const StyledSidebarHeader = styled.h5(
  ({ theme: { colors, media } }) => `
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  ${media.desktop}{
    font-size: 24px;
  }
  span {
    color: ${colors.main}
  }
`
);
