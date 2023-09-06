import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;
export const ErrorMessage = styled.h2(
  ({ theme: { colors } }) => `
    color: ${colors.graphite};
    font-sizes: 50px;
    text-align: center;
`
);
