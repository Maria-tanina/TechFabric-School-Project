import styled from "styled-components";

export const ErrorMessage = styled.h2(
  ({ theme: { colors } }) => `
    color: ${colors.graphite};
    font-sizes: 50px;
    text-align: center;
`
);
