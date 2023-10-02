import {
  HomePageWrapper,
  ListItemWithSpace,
  TermsHeader,
  TermsParagraph,
} from "./style";
import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { Link } from "react-router-dom";
import { CONTACT_US_PATH } from "@constants/paths";

const PrivacyPolicyPage = () => {
  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TermsHeader>Privacy Policy</TermsHeader>
        <TermsParagraph>
          <li>
            <strong>Introduction : </strong>
            Welcome to PowerUP. At PowerUP, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy outlines the types of information we may collect, how
            we use it, and the measures we take to safeguard your data when you
            visit our blog. <br />
            Please take a moment to review this Privacy Policy carefully to
            understand how we handle your personal information. By accessing or
            using our blog, you consent to the practices described in this
            Privacy Policy .
            <br />
            <br />
          </li>
          <li>
            We may collect both personal and non-personal information when you
            visit our Website: <br />
            <ListItemWithSpace>
              2.1 <strong>Personal Information:</strong> This may include your
              name, email address, and any other information you voluntarily
              provide to us when you sign up for our newsletter, leave comments,
              or contact us.
            </ListItemWithSpace>
            <ListItemWithSpace>
              2.2 <strong>Non-Personal Information:</strong> This may include
              information such as your IP address, browser type, device
              information, and browsing patterns. This information is collected
              using cookies and similar technologies.
            </ListItemWithSpace>
          </li>
          <br />
          <li>
            <strong>How We Use Your Information: </strong> <br />
            We may use the information we collect for the following purposes:
            <ListItemWithSpace>
              3.1 To provide you with access to our Website and its features.
            </ListItemWithSpace>
            <ListItemWithSpace>
              3.2 To personalize your experience on our Website.
            </ListItemWithSpace>
            <ListItemWithSpace>
              3.3 To send you newsletters, updates, and promotional materials,
              if you have subscribed to our mailing list.
            </ListItemWithSpace>
            <ListItemWithSpace>
              3.4 To respond to your inquiries and provide customer support.
            </ListItemWithSpace>
            <ListItemWithSpace>
              3.5 To analyze and improve our Website's performance and user
              experience.
            </ListItemWithSpace>
            <ListItemWithSpace>
              3.6 To prevent fraud, protect our rights, and comply with legal
              obligations.
            </ListItemWithSpace>
          </li>
          <br />
          <li>
            <strong>Cookies: </strong> <br />
            We use cookies and similar technologies to collect non-personal
            information about your browsing activities on our Website. You can
            manage your cookie preferences through your browser settings. Please
            note that disabling cookies may affect your experience on our
            Website.{" "}
          </li>
          <br />
          <li>
            <strong>Changes to Terms: </strong> We reserve the right to update
            and revise these Terms of Use at any time. Your continued use of the
            website after such changes will constitute your acceptance of the
            new terms.{" "}
          </li>
          <br />
          <li>
            <strong>Third-Party Links: </strong> <br />
            Our Website may contain links to third-party websites or services
            that we do not control. We are not responsible for the privacy
            practices of these websites or services. We recommend reviewing
            their respective Privacy Policies.
          </li>
          <br />
          <li>
            <strong>Data Security: </strong> <br />
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or method of storage
            is entirely secure, and we cannot guarantee the absolute security of
            your information.
          </li>
          <br />
          <li>
            <strong>Changes to this Privacy Policy: </strong> <br />
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal and regulatory reasons. We
            will notify you of any significant changes by posting the updated
            Privacy Policy on our Website. Please review this policy
            periodically.
          </li>
          <br />
          <li>
            <strong>Contact Us: </strong> <br />
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us on
            <Link to={CONTACT_US_PATH}> this page</Link>.
          </li>
        </TermsParagraph>
      </MainContent>
    </HomePageWrapper>
  );
};

export default PrivacyPolicyPage;
