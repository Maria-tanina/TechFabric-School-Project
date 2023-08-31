import styled from "styled-components";

export const StyledTag = styled.span(
  ({ theme: { colors, media } }) => `
  font-size: 12px;
  line-height: 24px;
  color: ${colors.gray};
  ${media.desktop}{
    font-size: 16px;
  line-height: 24px;
  }
`
);
