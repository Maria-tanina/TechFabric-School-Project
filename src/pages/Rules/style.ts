import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;
export const RulesHeader = styled.h2`
  font-size: 44px;
  margin-bottom: 30px;
`;
export const RulesParagraph = styled.p(
  ({ theme: { colors } }) => `
  font-size: 20px;
  line-height: 34px;
  margin-block-start: 20px;
  margin-block-end: 20px;
  color: ${colors.black};
  strong{
    color: ${colors.graphite};
  }
  span{
  display: block;
}
`
);
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  a,
  span {
    font-size: 55px;
  }
`;
