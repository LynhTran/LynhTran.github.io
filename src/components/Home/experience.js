import React from "react";
import Fade from "react-reveal/Fade";
import VerticalTimeline from "./timeline.js";

const Experience = () => {
  return (
    <Fade bottom cascade>
      <div id="experience" className="mt-10 px-8 m-20">
        <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl m-4 mb-10">
          My Experience
        </h1>
        <VerticalTimeline></VerticalTimeline>
      </div>
    </Fade>
  );
};

export default Experience;
