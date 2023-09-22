import styled from "styled-components";

export const StyledTag = styled.div(
  ({ theme: { fontSizes, media } }) => `
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  text-decoration-line: underline;
  word-break: break-word;
  ${media.desktop}{
    font-size: ${fontSizes.sidebarTag};
  }
`
);
export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
