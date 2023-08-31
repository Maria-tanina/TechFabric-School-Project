import styled from "styled-components";

export const ArticleDate = styled.span(
  ({ theme: { colors, media } }) => `
    color: ${colors.gray};
    font-size: 11px;
    font-weight: 400;
    line-height: 24px;
    margin-right: 8px;
    ${media.desktop}{
      font-size: 16px;
    }
`
);
