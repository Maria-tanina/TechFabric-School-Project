import styled from "styled-components";

export const SecondaryHeader = styled.h4(
  ({ theme: { fontSizes } }) => `
  font-size: ${fontSizes.secondaryHeader};
  font-weight: 700;
  line-height: 36px;
`
);
