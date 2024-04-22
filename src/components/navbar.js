import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import lynhLogo from "../images/lynh-logo.jpg";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <nav className="bg-transparent fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={lynhLogo}
                alt="lynh computer logo"
              ></img>
            </div>

            <div className="hidden lg:block ">
              <div className="ml-10 flex items-baseline space-x-4 bg-gradient-to-r rounded-xl from-pink to-purple">
                {/*
                <Link
                  className="text-white opacity-90 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/blog"
                >
                  Blog
                </Link>
              </div>{" "}
              */}
                <Link
                  href="#skills"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  🛠️ &nbsp; Skills
                </Link>
                <Link
                  href="#experience"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  💼 &nbsp; Experience
                </Link>
                <Link
                  href="#projects"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                >
                  💻 &nbsp; Projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lynhxtran/"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  target="_blank"
                >
                  <img
                    className="h-4 mr-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                  />{" "}
                  &nbsp; LinkedIn
                </Link>
                <Link
                  href="https://github.com/LynhTran/"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  target="_blank"
                >
                  <img
                    className="h-4 mr-1"
                    src="https://camo.githubusercontent.com/dfe7e80288901f8d5e8de7562d6f94491e2a7f8042316fd544fe3b6364b63783/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067"
                  />
                  &nbsp; GitHub
                </Link>
                <Link
                  href="https://www.goodreads.com/lynhtran"
                  className="text-white opacity-90 hover:opacity-100 justify-content flex flex-row px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  target="_blank"
                >
                  📚 &nbsp; What I'm Reading
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden relative">
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
        <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg">
          <div className="py-1">
            <Link
              onClick={closeMenu}
              href="#skills"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              🛠️ &nbsp; Skills
            </Link>
            <Link
              onClick={closeMenu}
              href="#experience"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              💼 &nbsp; Experience
            </Link>
            <Link
              onClick={closeMenu}
              href="#projects"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              💻 &nbsp; Projects
            </Link>
            <Link
              href="https://www.linkedin.com/in/lynhxtran/"
              className="text-gray-800 opacity-90 hover:bg-gray-200 justify-content flex flex-row px-4 py-2 "
              target="_blank"
            >
              <img
                className="h-4 mr-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              />{" "}
              &nbsp; LinkedIn
            </Link>
            <Link
              href="https://github.com/LynhTran/"
              className="text-gray-800 opacity-90 hover:bg-gray-200 justify-content flex flex-row px-4 py-2 "
              target="_blank"
            >
              <img
                className="h-4 mr-1"
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
              />
              &nbsp; GitHub
            </Link>
            <Link
              onClick={closeMenu}
              href="https://www.goodreads.com/lynhtran"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              target="_blank"
            >
              📚 &nbsp; Goodreads
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
