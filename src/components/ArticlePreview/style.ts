import styled from "styled-components";

export const ArticlePreviewWrap = styled.div(
  ({ theme: { colors, media } }) => `
  background: ${colors.white};
  border-radius: 8px;
`
);

export const ArticlePreviewMainImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
  max-height: 420px;
  object-fit: cover;
`;

export const StyledContentWrapper = styled.div(
  ({ theme: { colors, fontSizes } }) => `
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  
  p {
    overflow-wrap: anywhere;
  }
  
    a{
    border-bottom: 1px solid ${colors.main};
    color: #3366BB;
  }
   
  blockquote, div, img, ul {
    &:not(:last-child) {
      margin-bottom: 36px;
    }
  }
  
  h2 {
    font-size: ${fontSizes.secondaryHeader};
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 8px;
  }
  
   h3 {
    font-size: 22px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 8px;
  }
  
  img{
    width: 100%;
  }
  ul {
    list-style-type: none; 
    li:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  li::before {
    content: ""; 
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: ${colors.main};
    border-radius: 50%; 
    margin-right: 8px; 
  }
  
  blockquote {
    font-weight: 700;
    padding-left: 20px;
    position: relative;
    
    &:before {
      position: absolute;
      content: "";
      left: 0;
      width: 4px;
      height: 100%;
      background-color: ${colors.main};
    }
  }
`
);
