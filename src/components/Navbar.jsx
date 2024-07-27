import React, { useState } from "react";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-10 p-2 ">
      <li>
        <a
          className="bg-white bg-opacity-80 hover:bg-gray-300 p-1 transition-all duration-100"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="bg-white bg-opacity-80 hover:bg-gray-300 p-1 transition-all duration-100"
          href="#projects"
        >
          Create Character
        </a>
      </li>
      <li>
        <a
          className="bg-white bg-opacity-80 hover:bg-gray-300 p-1 transition-all duration-100"
          href="#skills"
        >
          Sign-Up
        </a>
      </li>
      <li>
        <a
          className="bg-white bg-opacity-80 hover:bg-gray-300 p-1 transition-all duration-100"
          href="#about"
        >
          About
        </a>
      </li>
    </ul>
  );
};

const SmallMenu = () => {
  return (
    <ul className="flex flex-col items-end gap-5 mt-5 font-mono  ">
      <li>
        <a
          className="bg-white hover:bg-gray-300 p-1 transition-all duration-100"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-gray-300 p-1 transition-all duration-100"
          href="#projects"
        >
          Create Character
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-gray-300 p-1 transition-all duration-100"
          href="#skills"
        >
          Sign-Up
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-gray-300 p-1 transition-all duration-100"
          href="#about"
        >
          About
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`z-10  top-0 w-full  bg-slate-200 bg-opacity-80`}>
      <div className=" flex flex-row justify-between pt-5 px-5 font-semibold text-lg">
        <div className="w-14 h-14 bg-purple-800"></div>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none flex items-end"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <div className="flex flex-col items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 bg-white hover:bg-red-400 transition-all duration-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <SmallMenu />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 bg-white bg-opacity-55 hover:bg-purple-400 transition-all duration-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
