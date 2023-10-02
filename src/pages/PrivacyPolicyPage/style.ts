import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;
export const TermsHeader = styled.h2`
  font-size: 44px;
  margin-bottom: 30px;
`;
export const ListItemWithSpace = styled.p`
  margin-left: 30px;
`;
export const TermsParagraph = styled.ol(
  ({ theme: { colors } }) => `
  font-size: 20px;
  line-height: 34px;
  margin-block-start: 20px;
  margin-block-end: 20px;
  color: ${colors.black};
  a{
    color: ${colors.main};
  }
  strong{
    color: ${colors.graphite};
  }
  list-style: decimal;
  list-style-position: inside; 
`
);
