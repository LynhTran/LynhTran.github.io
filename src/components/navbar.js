import React, { useState } from "react";
import { Link } from "gatsby";
import lynhLogo from "../images/lynh-logo.jpg";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <div>
              <img
                className="w-20 h-20"
                src={lynhLogo}
                alt="lynh computer logo"
              ></img>
            </div>

            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                {/*
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/blog"
                >
                  Blog
                </Link>
              </div>{" "}
              */}
                <Link
                  href="#skills"
                  className="text-white opacity-50 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  🛠️ Skills
                </Link>
                <Link
                  href="#experience"
                  className="text-white opacity-50 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  💼 Experience
                </Link>
                <Link
                  href="#projects"
                  className="text-white opacity-50 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  ⌨ Projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lynhxtran/"
                  className="text-white opacity-50 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  target="_blank"
                >
                  <img
                    className="h-4 mr-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                  />{" "}
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/LynhTran/"
                  className="text-white opacity-50 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  target="_blank"
                >
                  <img
                    className="h-4 mr-1"
                    src="https://camo.githubusercontent.com/dfe7e80288901f8d5e8de7562d6f94491e2a7f8042316fd544fe3b6364b63783/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067"
                  />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="white"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <Link
              href="https://www.linkedin.com/in/lynhxtran/"
              className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/LynhTran/"
              className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
