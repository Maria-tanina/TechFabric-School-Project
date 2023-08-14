import styled from "styled-components";

export const StyledDescription = styled.p(({theme: {fontSizes}}) =>`
  font-size: ${fontSizes.tag};
  line-height: 24px;
`);
export const StyledInfo = styled.div(() =>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 60px;
`);
export const StyledTitle = styled.h2(({theme: {fontSizes, media}}) =>`
  font-size: 45px;
  font-weight: 700;
  line-height: 70px;
  ${media.desktop} {
    font-size: ${fontSizes.mainHeader};
    line-height: 78px;
  }
`);
