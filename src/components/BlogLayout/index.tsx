import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function BlogLayout({ children }: { children: ReactNode }) {
  const [toggled, setToggled] = useState(true);

  return (
    <div className="grid grid-cols-post gap-4">
      <header
        className={`bg-gray-800 h-full px-4 py-6 ${
          toggled ? "block fixed top-0 shadow-lg" : "hidden md:block"
        } `}
      >
        <div className="sticky top-6">
          <Link to={"/"} className="text-3xl text-white font-semibold">
            Lynh Tran
          </Link>
          <Navbar />
        </div>

        {!toggled ? (
          <button className="">
            <svg
              width="100"
              height="100"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M7 16h18M7 25h18M7 7h18"
              />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </header>
      <main className="bg-gray-50 px-4 py-6 justify-center grid">
        <div className="max-w-[80ch] grid gap-4">{children}</div>
      </main>
    </div>
  );
}
