import styled from "styled-components";

export const StyledBottomText = styled.div(
  ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  gap: 10px;
  transition: .4s ease-in-out;
  
  &:hover {
    color: ${colors.main}
  }
`
);
