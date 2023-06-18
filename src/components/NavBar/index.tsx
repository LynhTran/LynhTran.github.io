import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative">
      <button className="text-white absolute top-0 right-0">
        <svg
          width="100"
          height="100"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m604.7 759.2 61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" />
        </svg>
      </button>
      <nav className="pt-2 text-lg">
        <ul className="grid gap-1">
          <li className="mr-6">
            <NavLink
              to={"/"}
              className="text-slate-100 hover:text-slate-300 hover:underline transition-colors"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to={"/"}
              className="text-slate-100 hover:text-slate-300 hover:underline transition-colors"
            >
              Lorem Ipsum Dolor Sit
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
