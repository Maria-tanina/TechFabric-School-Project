import styled from "styled-components";

export const MenuHeading = styled.h2(
  ({ theme: { colors, fontSizes } }) => `
  color: ${colors.black};
  font-size: ${fontSizes.secondaryHeader};
  line-height: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`
);

export const SearchBarWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const SearchBarFieldsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 40px;
`;
