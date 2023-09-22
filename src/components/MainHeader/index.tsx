import styled from "styled-components";

export const MainHeader = styled.h2(
  ({ theme: { fontSizes, media } }) => `
  font-size: 40px;
  font-weight: 700;
  line-height: 70px;
  word-break: break-word;
  ${media.desktop} {
    font-size: ${fontSizes.mainHeader};
    line-height: 78px;
  }
`
);
