import Layout from "../components/Layout";
import JobsPage from "../components/AboutJobsPage/JobsPage";
import JobListings from "../components/AboutJobsPage/JobListings";

const Jobs: React.FC = () => {
  return (
    <Layout>
      <JobsPage />
      <JobListings />
    </Layout>
  );
};

export default Jobs;
