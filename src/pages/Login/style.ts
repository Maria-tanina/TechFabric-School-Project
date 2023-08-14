import styled from "styled-components";

export const StyledInfo = styled.div(() =>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 60px;
`);

export const StyledLogo = styled.span(({theme: {colors, fontSizes}}) =>`
  color: ${colors.black};
  text-transform: uppercase;
`);

export const StyledLogoSpan = styled.span(({theme: {colors}}) =>`
  color: ${colors.main};
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

export const StyledDescription = styled.p(({theme: {fontSizes}}) =>`
  font-size: ${fontSizes.tag};
  line-height: 24px;
`);

export const StyledDecoration = styled.div(({theme: {colors, fontSizes}}) =>`
  font-size: ${fontSizes.tag};
  line-height: 24px;
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`);

export const StyledLine = styled.span(({theme: {colors}}) =>`
  flex-grow: 1;
  height: 1px;
  background-color: ${colors.black};
`);