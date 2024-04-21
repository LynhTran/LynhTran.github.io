import React from "react";
import Fade from "react-reveal/Fade";
const FeatureSection = () => {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "MobX",
    "FluentUI",
    "Bootstrap",
    "TailwindCSS",
    "CSS",
    "HTML",
    "MergeStyles",
    "Node.js",
  ];
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white opacity-60 font-semibold text-4xl">
              About
            </h1>
            <div className="mt-5">
              <div>
                <h1 className="text-white text-sm">
                  I grew up in Minnesota, where I also got my bachelors of
                  Computer Sciece with a minor in UX from the{" "}
                  <strong>
                    University of Minnesota College of Science & Engineering
                  </strong>
                  . I'm currently in the Seattle Area working on the Window's
                  Data Platform.
                </h1>
              </div>
            </div>
          </div>

          <div
            id="skills"
            className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6"
          >
            <h1 className="text-white text-4xl">
              I turn complex figma designs into reality using...
            </h1>
            <Fade bottom cascade>
              <div className="w-full flex flex-row  flex-wrap xxs:flex-col xs:flex-col sm:flex-row">
                {skills.map((skill) => (
                  <div className="rounded-xl h-10 flex flex-col content-center justify-center align-middle text-center p-3 m-2  bg-white transition duration-500 ease-in-out">
                    <span class="text-gradient bg-gradient-to-r from-pink to-purple">
                      <h3 className="text-1xl font-semibold">{skill}</h3>
                    </span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FeatureSection;
