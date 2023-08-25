import styled from "styled-components";

export const FilterTabsWrapper = styled.div(
  ({ theme: { media } }) => `
  display: flex;
  gap: 12px;
  .MuiButton-root{
    ${media.desktop}{
        width: 140px;
    }
  }
  a{
    font-size: 12px;
    ${media.desktop}{
        font-size: 15px;
    }
  }
`
);
