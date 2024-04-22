import * as React from "react";
import Layout from "../components/layout";

// Components
import Header from "../components/Home/header";
import FeatureSection from "../components/Home/featureSection";
import Experience from "../components/Home/experience";
import Projects from "../components/Home/projects";

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <Projects />
      <Experience></Experience>
    </Layout>
  </div>
);

export default IndexPage;
