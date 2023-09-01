import { MainHeader } from "@components/MainHeader";
import { ContactUsForm } from "@pages/ContactUs/components/ContactUsForm";
import { InfoList } from "@pages/ContactUs/components/InfoList";
import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { ContactUsWrapper } from "@pages/ContactUs/style";
import { ContactUsCard } from "./components/ContactUsCard";

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <ContactUsCard>
        <MainHeader>Contact us</MainHeader>
        <InfoList />
        <ContactUsForm />
      </ContactUsCard>
    </ContactUsWrapper>
  );
};

export default ContactUs;
