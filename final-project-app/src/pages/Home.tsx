import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WeAre from "../components/WeAre";
import AlwaysOnGuard from "../components/AlwaysOnGuard";
import Industries from "../components/Industries";
import Leadership from "../components/Leadership";
import Partners from "../components/Partners";
import ReachOut from "../components/ReachOut";
import Certification from "../components/Certification";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WeAre />
      <AlwaysOnGuard />
      <Industries />
      <Leadership />
      <Partners />
      <ReachOut />
      <Certification />
      <Testimonial />
    </Layout>
  );
};

export default Home;
