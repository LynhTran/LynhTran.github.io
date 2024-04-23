import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Header from "../components/Home/header";
import FeatureSection from "../components/Home/featureSection";
import Experience from "../components/Home/experience";
import Projects from "../components/Home/projects";
import { fairyDustCursor } from "cursor-effects";
const IndexPage = () => {
  useEffect(() => {
    new fairyDustCursor({
      colors: [
        "#F58DFF",
        "#17FF72",
        "#05CBFF ",
        "#FFF340",
        "#051EFF",
        "#7405FF",
      ],
    });
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <Layout>
        <Header />
        <FeatureSection />
        <Projects />
        <Experience />
      </Layout>
    </div>
  );
};

export default IndexPage;
