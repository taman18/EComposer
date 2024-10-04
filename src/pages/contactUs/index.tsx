import {
  ABOUT_PAGE_FEATURES,
  CONTACT_OPTIONS,
  CUSTOMER_SUPPORT_OPTION,
  FAQ_DATA,
} from "../../utils/mockData";
import CustomerSupport from "./components/customerSupport/CustomerSupport";
import Footer from "./components/footer";
import HelpCenter from "./components/helpCenter/HelpCenter";
import ServiceCards from "./components/serviceCards/ServiceCards";
import TopSearchedQuestions from "./components/topSearchedQuestions/TopSearchedQuestions";
import TrackingReturnCard from "./components/trackingReturnCard/TrackingReturnCard";

const ContactUs: React.FC = () => {
  return (
    <>
      <section className="relative">
        <HelpCenter />
        <TrackingReturnCard customerSupportOptions={CUSTOMER_SUPPORT_OPTION} />
      </section>
      <ServiceCards
        features={ABOUT_PAGE_FEATURES}
        sectionTitle="Browse our help desk"
      />
      <TopSearchedQuestions faqData={FAQ_DATA} />
      <CustomerSupport contactOptions={CONTACT_OPTIONS} />
      <Footer />
    </>
  );
};

export default ContactUs;
