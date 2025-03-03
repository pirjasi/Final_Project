import Layout from "../components/Layout";
import OurPartnerSection from "../components/PartnerSection/OurPartner";
import PartnerSections from "../components/PartnerSection/PartnerSections";
import MicrosoftPartnership from "../components/PartnerSection/MicrosoftPartnership";
import SalesforcePartnership from "../components/PartnerSection/SalesforcePartnership";
import AzuraPartner from "../components/PartnerSection/AzuraPartner";
import Rating from "../components/PartnerSection/Rating";

const PartnerPage: React.FC = () => {
  return (
    <Layout>
      <OurPartnerSection />
      <PartnerSections />
      <MicrosoftPartnership />
      <SalesforcePartnership />
      <AzuraPartner />
      <Rating />
    </Layout>
  );
};

export default PartnerPage;
