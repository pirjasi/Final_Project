import Layout from "../components/Layout";
import IncidentResponse from "../components/ServicePage3/IncidentResponse";
import IncidentFeatures from "../components/ServicePage3/IncidentFeatures";
import IncidentSection3 from "../components/ServicePage3/IncidentSection3";

const Response: React.FC = () => {
  return (
    <Layout>
      <IncidentResponse />
      <IncidentFeatures />
      <IncidentSection3 />
    </Layout>
  );
};

export default Response;
