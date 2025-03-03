import Layout from "../components/Layout";
import SiemFeatures from "../components/ServicePage/SiemFeatures";
import SiemSection3 from "../components/ServicePage/SiemSection3";
import SiemThreat from "../components/ServicePage/SiemThreat";

const SIEM: React.FC = () => {
  return (
    <Layout>
      <SiemThreat />
      <SiemFeatures />
      <SiemSection3 />
    </Layout>
  );
};

export default SIEM;
