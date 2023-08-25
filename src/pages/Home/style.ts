import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const ArticlesWithMenu = styled.div`
  max-width: 940px;
`;

export const RightSidebar = styled.div`
  position: sticky;
  top: 15px;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 2;
`;
