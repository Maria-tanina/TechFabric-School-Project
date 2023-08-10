import React from "react";
import {
    AdditionalInfoWrapper, CopyrightText,
    FooterHeading,
    FooterMainBlockWrapper,
    FooterMenuButton,
    FooterWrapper, SocialMediaList, SocialMediaListItem, TermsButton, TermsButtonsList
} from "@components/Footer/style";
import Logo from "@components/Logo";
import {Link} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterMainBlockWrapper>
                <Logo isFooter={true}/>
                <div>
                    <FooterHeading>
                        Sectors
                    </FooterHeading>
                    <ul>
                        <FooterMenuButton>
                            <Link to="/">Home Page</Link>
                        </FooterMenuButton>
                        <FooterMenuButton>
                            <Link to="/">Tags</Link>
                        </FooterMenuButton>
                        <FooterMenuButton>
                            <Link to="/">Favorites</Link>
                        </FooterMenuButton>
                        <FooterMenuButton>
                            <Link to="/">Contact with Us</Link>
                        </FooterMenuButton>
                        <FooterMenuButton>
                            <Link to="/">Rules</Link>
                        </FooterMenuButton>
                    </ul>
                </div>
                <div>
                    <FooterHeading>
                        Follow Us
                    </FooterHeading>
                    <SocialMediaList>
                        <SocialMediaListItem>
                            <Link to="/"><FacebookIcon/></Link>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <Link to="/"><InstagramIcon/></Link>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <Link to="/"><TwitterIcon/></Link>
                        </SocialMediaListItem>
                    </SocialMediaList>
                </div>
            </FooterMainBlockWrapper>
            <AdditionalInfoWrapper>
                <CopyrightText>
                    Copyright © 2023 ROADSTER
                </CopyrightText>
                <TermsButtonsList>
                    <TermsButton>
                        <Link to="/">Contact Us</Link>
                    </TermsButton>
                    <TermsButton>
                        <Link to="/">Privacy Policy</Link>
                    </TermsButton>
                    <TermsButton>
                        <Link to="/">Terms of Use</Link>
                    </TermsButton>
                </TermsButtonsList>


            </AdditionalInfoWrapper>
        </FooterWrapper>
    );
};

export default Footer;
