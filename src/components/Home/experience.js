import React from "react";
import Fade from "react-reveal/Fade";
import VerticalTimeline from "./timeline.js";
const Experience = () => {
  return (
    <Fade bottom cascade>
      <div id="experience" className="mt-10 px-8 m-20">
        <h1 className="text-white font-bold text-xl xxs:text-xl xs:text-xl sm:text-xl md:text-1xl lg:text-2xl xl:text-6xl 2xl:text-4xl m-4 mb-10">
          Some of my experiences include...
        </h1>
        <div className="text-gray-400 ml-4 ">
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
