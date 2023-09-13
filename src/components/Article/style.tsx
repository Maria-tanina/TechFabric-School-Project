import styled from "styled-components";

export const ArticleWrap = styled.div(
  ({ theme: { colors, media } }) => `
  max-width: 1080px;
  margin: 0 20px ;
  background: ${colors.white};
  border-radius: 8px;
  ${media.desktop} {
    margin: 0 40px 0 100px;
  }
`
);

export const ArticleMainImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;
export const ArticleBody = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  img {
    border-radius: 8px;
  }
`;
export const ArticleMainHeader = styled.h1(
  ({ theme: { colors, media } }) => `
    color: ${colors.black};
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
    ${media.desktop} {
        font-size: 45px;
        line-height: 60px; 
    }
`
);
export const ArticleTags = styled.div`
  display: flex;
  gap: 12px;
`;
export const ArticleSubject = styled.div(
  ({ theme: { colors } }) => `
  margin-bottom: 25px;
  
  span{
    color: ${colors.black};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`
);
export const ArticleCommentWrapper = styled.div`
  padding: 52px 24px;
`;
export const CountComments = styled.div(
  ({ theme: { colors } }) => `
    color: ${colors.black};
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 20px;
`
);
export const CommentBody = styled.div(
  ({ theme: { colors } }) => `
  border-radius: 8px;
  border: 1px solid ${colors.strokeGray};
  padding: 12px 16px;
  margin-bottom: 20px;
`
);
export const CommentMessage = styled.p(
  ({ theme: { colors } }) => `
    color: ${colors.black};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; 
    margin-top: 12px;
`
);
export const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
