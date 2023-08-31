import styled from "styled-components";

export const SidebarArticle = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child div {
    padding-bottom: 0;
  }
  &:last-child p {
    display: none;
  }
`;

export const Line = styled.p(
  ({ theme: { colors } }) => `
    background: ${colors.strokeGray};
    height: 2px;
    width: calc(100% + 48px);
    margin-left: -24px;
    :last-child{
    background: #000;
  }
`
);

export const HeaderSidebarArticle = styled.h3(
  ({ theme: { colors, media } }) => `
    color: ${colors.black};
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 8px;
    ${media.desktop}{
    font-size: 20px;
    line-height: 30px;
    }
`
);
export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 16px;
  padding-bottom: 28px;
`;
