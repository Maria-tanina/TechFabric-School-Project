import styled from "styled-components";

export const TabsMenuWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;
`;

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

interface IStyledTabProps {
  isActive: boolean;
}

export const StyledTab = styled.div<IStyledTabProps>(
  ({ isActive }) => `
  font-weight: ${isActive ? 800 : 500};
`
);
