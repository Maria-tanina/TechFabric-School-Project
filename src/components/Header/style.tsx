import styled from "styled-components";

export const HeaderWrapper = styled.header(
  ({ theme: { colors, paddings, media } }) => `
  background: ${colors.white};
  padding: ${paddings.tabletHeaderPadding};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  ${media.desktop} {
    padding: ${paddings.headerPadding};
  }
  
  .MuiPaper-root.MuiPaper-elevation:empty{
    display: none;
  }
  
    .MuiAutocomplete-popper {
      .MuiListSubheader-root {
        position: static;
        padding: 6px 15px;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px; 
        color: ${colors.black};
        opacity: 1;
        background-color: ${colors.lightYellow};
      }
    }
  }
`
);
export const HeaderLeftSide = styled.div(
  ({ theme: { media } }) => `
  display: flex;
  align-items: center;
  gap: 30px;
  width: 52%;
  ${media.desktop} {
    gap: 60px;
  }
`
);
export const HeaderRightSide = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
