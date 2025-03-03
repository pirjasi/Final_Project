import Layout from "../components/Layout";
import NetworkFeatures from "../components/ServicePage4/NetworkFeatures";
import NetworkSecurity from "../components/ServicePage4/NetworkSecurity";
import NetworkSection3 from "../components/ServicePage4/NetworkSection3";

const Network: React.FC = () => {
  return (
    <Layout>
      <NetworkSecurity />
      <NetworkFeatures />
      <NetworkSection3 />
    </Layout>
  );
};

export default Network;
