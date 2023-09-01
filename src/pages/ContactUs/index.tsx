import { AuthCard } from "@components/AuthCard";
import { MainHeader } from "@components/MainHeader";
import { ContactUsForm } from "@pages/ContactUs/components/ContactUsForm";
import { InfoList } from "@pages/ContactUs/components/InfoList";

const ContactUs = () => {
  return (
    <section>
      <AuthCard $width="800px">
        <MainHeader>Contact us</MainHeader>
        <InfoList />
        <ContactUsForm />
      </AuthCard>
    </section>
  );
};

export default ContactUs;
