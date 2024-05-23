import React from "react";
import Fade from "react-reveal/Fade";
import Typed from "typed.js";

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Lynh Tran", "a Front End Developer", "in the Seattle Area"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: "|",
      attr: null, // Prevent Typed.js from automatically adding cursor class
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mx-auto px-8 mt-32 m-2 sm:ml-28 sm:mr-28">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-5 mb-4 text-xs xxs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-xl">
            Welcome to my website
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            👋 Hi. I'm{" "}
            <span
              className="text-gradient bg-gradient-to-r from-pink to-purple"
              ref={el}
            />
          </h1>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
