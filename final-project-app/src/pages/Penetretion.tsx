import Layout from "../components/Layout";
import PenetretionFeatures from "../components/ServicePage2/PenetretionFeatures";
import PenetretionSection3 from "../components/ServicePage2/PenetretionSection3";
import PenetretionTesting from "../components/ServicePage2/PenetretionTesting";

const Penetretion: React.FC = () => {
  return (
    <Layout>
      <PenetretionTesting />
      <PenetretionFeatures />
      <PenetretionSection3 />
    </Layout>
  );
};

export default Penetretion;
