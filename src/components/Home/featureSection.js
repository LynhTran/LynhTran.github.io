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

  const interests = ["Mechanical Keyboards", "Cappuccinos"];

  return (
    <div className=" mx-auto m-2 sm:ml-32 sm:mr-32">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row gap-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-4 sm:p-8 rounded-xl xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white opacity-60 font-semibold text-xl xxs:text-xl xs:text-xl sm:text-xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-4xl">
              About
            </h1>
            <div className="mt-5">
              <div>
                <h1 className="text-white text-xs sm:text-sm md:text-lg lg:text-xl">
                  I grew up in Minnesota, where I got my bachelors of Computer
                  Science with a minor in UX from the{" "}
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
            className="w-4/6 bg-lightblack p-8 rounded-xl xxs:w-full xs:w-full sm:w-4/6"
          >
            <h1 className="text-white mb-4 text-xl xxs:text-xl xs:text-xl sm:text-xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-4xl">
              I turn complex figma designs into reality using...
            </h1>
            <Fade bottom cascade>
              <div className="w-full flex flex-row flex-wrap gap-5">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl h-10 flex flex-col content-center justify-center align-middle text-center p-3 bg-white transition duration-500 ease-in-out"
                  >
                    <span class="text-gradient bg-gradient-to-r from-pink to-purple">
                      <h3 className="text-sm xxs:text-sm xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-semibold">
                        {skill}
                      </h3>
                    </span>
                  </div>
                ))}
                {interests.map((i) => (
                  <div
                    key={i}
                    className="rounded-lg h-7 flex flex-col content-center justify-center align-middle text-center p-2 bg-gradient-to-r from-pink to-purple transition duration-500 ease-in-out"
                  >
                    <span class="text-white ">
                      <h3 className="text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold">
                        {i}
                      </h3>
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
