import styled from "styled-components";

export const StyledSidebarHeader = styled.h5(
  ({ theme: { colors, media } }) => `
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 28px;
  ${media.desktop}{
    font-size: 24px;
  }
  span {
    color: ${colors.main}
  }
`
);
