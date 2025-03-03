import Layout from "../components/Layout";
import HeroIndustries from "../components/IndustriesPage/HeroIndustries";
import WeProtect from "../components/IndustriesPage/WeProtect";
import InquirySection from "../components/IndustriesPage/InquirySection";

const Industries: React.FC = () => {
  return (
    <Layout>
      <HeroIndustries />
      <WeProtect />
      <InquirySection />
    </Layout>
  );
};

export default Industries;
