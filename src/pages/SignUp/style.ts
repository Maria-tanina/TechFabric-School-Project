import styled from "styled-components";

export const SignupWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 0;
`;

export const StyledCard = styled.div(({theme: {colors, paddings}}) =>`
  padding: ${paddings.formPadding};
  border-radius: 8px;
  border: 2px solid ${colors.strokeGray};
  background: ${colors.white};
  max-width: 1080px;
  margin: 0 auto;
  @media(max-width: 970px) {
    padding: 52px;
  }
`);

export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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

export const StyledTitle = styled.h2(({theme: {fontSizes}}) =>`
  font-size: ${fontSizes.mainHeader};
  font-weight: 700;
  line-height: 78px;
  @media(max-width: 970px) {
    font-size: 45px;
    line-height: 70px;
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
  margin-bottom: 24px;
  &::after {
    position: absolute;
    content: "";
    width: 44%;
    height: 1px;
    background-color: ${colors.black};
    bottom: 50%;
    transform: translateY(100%);
    left: 0;
  }
  &::before {
    position: absolute;
    content: "";
    width: 44%;
    height: 1px;
    background-color: ${colors.black};
    bottom: 50%;
    transform: translateY(100%);
    right: 0;
  }
`);