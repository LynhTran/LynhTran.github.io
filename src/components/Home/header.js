import React from "react";
import Fade from "react-reveal/Fade";
import Typed from "typed.js";
// Assets

const Header = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Lynh Tran", "a Front End Developer", "in the Seattle Area"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 mt-32 ml-28 mr-28">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-5 mb-4 text-xs xxs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-xl">
            Welcome to my website
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            👋 Hi. I'm{" "}
            <span class="text-gradient bg-gradient-to-r from-[#be185d] to-[#7e22ce]">
              <span ref={el} />
            </span>
          </h1>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
