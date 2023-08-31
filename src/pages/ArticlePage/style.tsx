import styled from "styled-components";

export const ArticleSideMenuItem = styled.div`
  width: 42px;
  text-align: center;
  margin-bottom: 32px;
  .MuiSvgIcon-fontSizeMedium {
    width: 30px;
    height: 30px;
  }
`;
export const LeftSidebar = styled.div`
  width: 42px;
`;
export const Count = styled.p(
  ({ theme: { colors } }) => `
    color: ${colors.graphite};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 5px;
`
);
