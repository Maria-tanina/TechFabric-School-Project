import styled from "styled-components";

export const ErrorMessage = styled.h2(
  ({ theme: { colors } }) => `
    color: ${colors.graphite};
    font-sizes: 50px;
    text-align: center;
`
);

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
`;

export const SearchLeftSidebar = styled.div`
  max-width: 200px;
  position: sticky;
  top: 15px;
  width: 100%;
  li div {
    width: 100%;
  }
`;
