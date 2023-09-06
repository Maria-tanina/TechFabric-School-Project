import styled from "styled-components";

export const RulesHeader = styled.h3(
  ({ theme: { colors } }) => `
  color: ${colors.black};
  font-size: 22px;
  font-weight: 700;
  line-height: 36px;
`
);
export const RulesList = styled.ol`
  list-style: decimal;
`;
export const AuthorRulesWrapper = styled.div`
  max-width: 520px;
  width: 35%;
`;

export const RulesListItem = styled.li(
  ({ theme: { colors } }) => `
  color: ${colors.black};
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
`
);
