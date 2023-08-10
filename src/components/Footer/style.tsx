import styled from "styled-components";
import theme from "@styles/theme";

export const FooterWrapper = styled.footer`
  background: ${theme.colors.graphite};
  padding: ${theme.paddings.footerPadding};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10);
`
export const FooterMainBlockWrapper = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
`
export const AdditionalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`
export const FooterHeading = styled.h2`
  font-size: ${theme.fontSizes.secondaryHeader};
  color: ${theme.colors.white};
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 12px;
`
export const FooterMenuButton = styled.li`
  margin-bottom: 8px;

  a {
    font-size: 20px;
    color: ${theme.colors.white};
    font-weight: 600;
    display: block;
    line-height: 36px;
    transition: .4s ease-in-out;
  }

  &:hover {
    a {
      color: ${theme.colors.main};
    }
  }
`
export const SocialMediaList = styled.ul`
  display: flex;
  gap: 24px;
`
export const SocialMediaListItem = styled.li`
  a {
    color: ${theme.colors.white};
    transition: .4s ease-in-out;

    &:hover {
      color: ${theme.colors.main};
    }

    svg {
      width: 35px;
      height: 35px;
      path{
        width: 100%;
        height: 100%;
      }
      
    }
  }

`
export const CopyrightText = styled.p`
  color: ${theme.colors.copyrightGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`
export const TermsButtonsList = styled.ul`
  display: flex;
  gap: 68px;
`
export const TermsButton = styled.li`
  a{
    color: ${theme.colors.copyrightGray};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
`


