import React from "react";
import Fade from "react-reveal/Fade";
import gopherABite from "../../images/gopher-a-bite.png";
import wateredDown from "../../images/watered-down.png";

const Projects = () => {
  const projects = [
    {
      title: "Dory Defense",
      year: 2022,
      description: `A 24 hackathon project that placed 1st at Minnehack 2022
            inspired by my experience volunteering at an alzheimer's
            assisted living home.`,
      imageSrc:
        "https://y.yarn.co/94ddc39c-70f5-44eb-a379-bfa6c23618fe_text.gif",
      href: "https://devpost.com/software/update-later",
    },
    {
      title: "Watered Down",
      year: 2021,
      description: `A 24 hackathon project that placed 4th at Minnehack 2021`,
      imageSrc: "wateredDown",
      href: "https://devpost.com/software/watered-down",
    },
    {
      title: "BAM Website (bam4biz.com)",
      year: 2021,
      description: `I revamped the Business Association of Multicultural Student's
        website when I was on the board as Director of Technology.`,
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5c6b6d8b04907916050b145e/1580601994602-LE6HRARN6991I4OFYERS/BAM+LOGO.png",
      href: "https://bam4bix.com",
    },
    {
      title: "Gopher A Bite!",
      year: 2020,
      description: `SASE Labs University of Minnesota project for the 2020-2021
        school year: a webapp that recommends local restaurants!`,
      imageSrc: "gopherABite",
      href: "https://github.com/LynhTran/gopher-a-bite",
    },
  ];
  return (
    <div id="projects" className="m-20 p-10">
      <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl mb-10">
        Project Archives
      </h1>
      <Fade bottom cascade>
        <section class="mb-32 text-center lg:text-left">
          <div class="grid gap-x-6 gap-y-6 lg:grid-cols-3 lg:gap-x-12">
            {projects.map((p) => (
              <div
                class="mb-6 block rounded-lg bg-gradient-to-r from-pink to-purple cursor-pointer
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
                  <p class="mb-2 text-white">{p.description}</p>
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
