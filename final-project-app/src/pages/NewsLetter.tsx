import Layout from "../components/Layout";
import NewsLetterPage from "../components/NewsletterPage/NewsLetterPage";
import RelatedNews from "../components/NewsletterPage/RelatedNews";
import Subscribed from "../components/NewsletterPage/Subscribed";
import TrendingThreats from "../components/NewsletterPage/TrendingThreats";

const Newsletter: React.FC = () => {
  return (
    <Layout>
      <NewsLetterPage />
      <RelatedNews />
      <TrendingThreats />
      <Subscribed />
    </Layout>
  );
};

export default Newsletter;
