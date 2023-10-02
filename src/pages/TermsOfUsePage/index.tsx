import { HomePageWrapper, TermsHeader, TermsParagraph } from "./style";
import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { Link } from "react-router-dom";
import { CONTACT_US_PATH, PRIVACY_POLICY_PATH } from "@constants/paths";

const TermsOfUsePage = () => {
  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TermsHeader>Terms of use</TermsHeader>
        <TermsParagraph>
          <li>
            <strong>Acceptance of Terms: </strong>
            By using this website, you agree to comply with and be bound by
            these Terms of Use. If you do not agree to these terms, please do
            not use the website.{" "}
          </li>
          <li>
            <strong>Copyright and Intellectual Property: </strong> All content
            on this website, including text, images, videos, and graphics, is
            protected by copyright and other intellectual property laws. You may
            not reproduce, distribute, or use any content from this website
            without our prior written consent.{" "}
          </li>
          <li>
            <strong>Privacy: </strong> Your use of this website is also governed
            by our Privacy Policy, which can be found{" "}
            <Link to={PRIVACY_POLICY_PATH} style={{ color: "#FEDE24" }}>
              here
            </Link>
            . By using this website, you consent to the practices described in
            the Privacy Policy.{" "}
          </li>
          <li>
            <strong>Disclaimer of Liability: </strong> This website is provided
            "as is" and we make no representations or warranties, express or
            implied, regarding the accuracy or reliability of the content. We
            shall not be liable for any damages or losses resulting from your
            use of the website.{" "}
          </li>
          <li>
            <strong>Changes to Terms: </strong> We reserve the right to update
            and revise these Terms of Use at any time. Your continued use of the
            website after such changes will constitute your acceptance of the
            new terms.{" "}
          </li>
          <li>
            <strong>Contact Information: </strong> If you need to get in touch
            with us, please visit our{" "}
            <Link to={`${CONTACT_US_PATH}`} style={{ color: "#FEDE24" }}>
              Contact Page
            </Link>{" "}
            for detailed contact information.{" "}
          </li>
        </TermsParagraph>
      </MainContent>
    </HomePageWrapper>
  );
};

export default TermsOfUsePage;
