import styled from "styled-components";

export const StyledInfo = styled.div(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 60px;
`
);

export const StyledDescription = styled.p(
  ({ theme: { fontSizes } }) => `
  font-size: ${fontSizes.tag};
  line-height: 24px;
`
);
