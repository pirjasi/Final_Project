import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/AboutUsPage/HeroSection";
import OurValues from "../components/AboutUsPage/OurValues";
import Locations from "../components/AboutUsPage/Locations";
import Founders from "../components/AboutUsPage/Founders";
import Specialists from "../components/AboutUsPage/Specialists";
import Credentials from "../components/AboutUsPage/Credentials";
import ClientStories from "../components/AboutUsPage/ClientStories";

const About: React.FC = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <OurValues />
        <Locations />
        <Founders />
        <Specialists />
        <Credentials />
        <ClientStories />
      </Layout>
    </div>
  );
};

export default About;
