import styled from "styled-components";

export const StyledTopAuthorName = styled.div`
  display: flex;
  gap: 16px;
`;

export const AuthorName = styled.div(
  ({ theme: { colors, media } }) => `
    color: ${colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    ${media.desktopLarge}{
        font-size: 24px;
        line-height: 36px;
    }
`
);

export const StyledTopAuthorAvatar = styled.div(
  ({ theme: { colors, media } }) => `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.main};
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    ${media.desktopLarge}{
      width: 72px;
      height: 72px;
    }
`
);
