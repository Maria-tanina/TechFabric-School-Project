import React from "react";
import {
  AdditionalInfoWrapper,
  CopyrightText,
  FooterHeading,
  FooterMainBlockWrapper,
  FooterMenuButton,
  FooterWrapper,
  SocialMediaList,
  SocialMediaListItem,
  TermsButton,
  TermsButtonsList,
} from "@components/Footer/style";
import Logo from "@components/Logo";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  CONTACT_US_PATH,
  FAVORITES_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  RULES_PATH,
  TAGS_PATH,
  TERMS_OF_USE_PATH,
} from "@constants/paths";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMainBlockWrapper>
        <Logo isFooter />
        <div>
          <FooterHeading>Sectors</FooterHeading>
          <ul>
            <FooterMenuButton>
              <Link to={HOME_PATH}>Home Page</Link>
            </FooterMenuButton>
            <FooterMenuButton>
              <Link to={TAGS_PATH}>Tags</Link>
            </FooterMenuButton>
            <FooterMenuButton>
              <Link to={FAVORITES_PATH}>Favorites</Link>
            </FooterMenuButton>
            <FooterMenuButton>
              <Link to={CONTACT_US_PATH}>Contact with Us</Link>
            </FooterMenuButton>
            <FooterMenuButton>
              <Link to={RULES_PATH}>Rules</Link>
            </FooterMenuButton>
          </ul>
        </div>
        <div>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialMediaList>
            <SocialMediaListItem>
              <Link to="/">
                <FacebookIcon />
              </Link>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <Link to="/">
                <InstagramIcon />
              </Link>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <Link to="/">
                <TwitterIcon />
              </Link>
            </SocialMediaListItem>
          </SocialMediaList>
        </div>
      </FooterMainBlockWrapper>
      <AdditionalInfoWrapper>
        <CopyrightText>Copyright © 2023 POWERUP</CopyrightText>
        <TermsButtonsList>
          <TermsButton>
            <Link to={PRIVACY_POLICY_PATH}>Privacy Policy</Link>
          </TermsButton>
          <TermsButton>
            <Link to={TERMS_OF_USE_PATH}>Terms of Use</Link>
          </TermsButton>
        </TermsButtonsList>
      </AdditionalInfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
