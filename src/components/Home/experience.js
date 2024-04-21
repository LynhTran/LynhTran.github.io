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
        <div
          className="text-white opacity-50! 
         ml-4 "
        >
          To see the full list of experiences, check out my{" "}
          <a
            href="https://www.linkedin.com/in/lynhxtran/"
            className="align-center hover:opacity-100  text-sm font-bold font-poppins"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="hidden md:block ">
          <VerticalTimeline></VerticalTimeline>
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
