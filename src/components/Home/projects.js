import React from "react";
import Fade from "react-reveal/Fade";
import gopherABite from "../../images/gopher-a-bite.png";
import wateredDown from "../../images/watered-down.png";

const Projects = () => {
  const projects = [
    {
      title: "This Website",
      year: 2024,
      description: `You're looking at it.`,
      imageSrc:
        "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
      href: "https://github.com/LynhTran/LynhTran.github.io",
      skills: [
        "React.js",
        "JS",
        "TailwindCSS",
        "Gatsby",
        "Yarn",
        "HTML",
        "GitHub Pages",
      ],
    },
    {
      title: "Dory Defense",
      year: 2022,
      description: `A 24 hackathon project that placed 1st at Minnehack 2022
            inspired by my experience volunteering at an alzheimer's
            assisted living home.`,
      imageSrc:
        "https://y.yarn.co/94ddc39c-70f5-44eb-a379-bfa6c23618fe_text.gif",
      href: "https://devpost.com/software/update-later",
      skills: [
        "React.js",
        "JS",
        "CSS",
        "Chrome Extensions API",
        "iziToast",
        "Bootstrap",
        "Machine Learning",
      ],
    },
    {
      title: "Watered Down",
      year: 2021,
      description: `A 24 hackathon project that placed 4th at Minnehack 2021`,
      imageSrc: "wateredDown",
      href: "https://devpost.com/software/watered-down",
      skills: ["React.js", "JS", "CSS", "React-Router", "Bootstrap"],
    },
    {
      title: "Gopher A Bite!",
      year: 2020,
      description: `SASE Labs University of Minnesota project for the 2020-2021
        school year: a webapp that recommends local restaurants!`,
      imageSrc: "gopherABite",
      href: "https://github.com/LynhTran/gopher-a-bite",
      skills: [
        "Firebase",
        "React.js",
        "JS",
        "Bootstrap",
        "React-Router",
        "CSS",
      ],
    },
    {
      title: "BAM Website (bam4biz.com)",
      year: 2021,
      description: `I revamped the Business Association of Multicultural Student's
        website when I was on the board as Director of Technology.`,
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5c6b6d8b04907916050b145e/1580601994602-LE6HRARN6991I4OFYERS/BAM+LOGO.png",
      href: "https://www.bam4biz.com/",
      skills: ["HTML", "JS", "CSS"],
    },
  ];
  return (
    <div id="projects" className="m-20 p-10">
      <h1 className="text-white font-bold text-xl xxs:text-xl xs:text-xl sm:text-xl md:text-1xl lg:text-2xl xl:text-6xl 2xl:text-4xl mb-10">
        Some of my past projects include...
      </h1>
      <Fade bottom cascade>
        <section class="mb-32 text-center lg:text-left">
          <div class="grid gap-x-6 gap-y-6 lg:grid-cols-3 lg:gap-x-12">
            {projects.map((p) => (
              <div
                key={p.title}
                class="mb-6 pb-4 block rounded-lg bg-gradient-to-r from-pink to-purple cursor-pointer
                transform transition duration-500 
                hover:scale-110 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={
                      p.imageSrc === "gopherABite"
                        ? gopherABite
                        : p.imageSrc === "wateredDown"
                        ? wateredDown
                        : p.imageSrc
                    }
                    class="w-full rounded-t-lg"
                  />
                  <a href={p.href} target="_blank">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                  </a>
                </div>
                <div class="p-6">
                  <h5 class="mb-1 text-white text-lg font-bold">{p.title}</h5>
                  <p class="opacity-50 text-white">{p.year}</p>
                  <p class=" text-white">{p.description}</p>
                </div>
                <div className="flex flex-row flex-wrap pl-4 pr-4">
                  {p.skills.map((s) => (
                    <div className=" pl-3 pr-3 pt-1 pb-1 rounded-xl m-1 bg-white ">
                      <p className="bg-gradient-to-r text-gradient from-[#911977] to-purple">
                        {s}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;
