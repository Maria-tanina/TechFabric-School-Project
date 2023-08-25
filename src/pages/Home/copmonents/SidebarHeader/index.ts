import styled from "styled-components";

export const StyledSidebarHeader = styled.h5(
  ({ theme: { colors } }) => `
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 28px;
  span {
    color: ${colors.main}
  }
`
);
