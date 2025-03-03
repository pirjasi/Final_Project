import Layout from "../components/Layout";

import SecurityAwareness from "../components/ServicePage5/SecurityAwareness";
import SecurityFeatures from "../components/ServicePage5/SecurityFeatures";
import SecuritySection3 from "../components/ServicePage5/SecuritySection3";

const Security: React.FC = () => {
  return (
    <Layout>
      <SecurityAwareness />
      <SecurityFeatures />
      <SecuritySection3 />
    </Layout>
  );
};

export default Security;
