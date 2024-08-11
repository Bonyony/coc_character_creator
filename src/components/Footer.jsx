import React from "react";
import { Link } from "react-router-dom";
import squid from "../../public/icons8-octopus-64.png";

import Home from "../pages/Home";

const Footer = () => {
  return (
    <div className="h-auto text-gray-200  p-6 bg-slate-800 flex flex-col justify-center text-center">
      <div
        id="links"
        className="flex flex-row justify-center text-center gap-5"
      >
        <Link
          to={"/"}
          className="hover:text-red-400 transition-all duration-100"
        >
          Home
        </Link>
        <Link
          to={"/create"}
          className="hover:text-red-400 transition-all duration-100"
        >
          Create Character
        </Link>
        <Link
          to={"/signup"}
          className="hover:text-red-400 transition-all duration-100"
        >
          Sign-up
        </Link>
        <Link
          to={"/about"}
          className="hover:text-red-400 transition-all duration-100"
        >
          About
        </Link>
      </div>

      <div id="legal" className="text-xs mt-3">
        <p>Cthulhu Creator 2024</p>
      </div>
    </div>
  );
};

export default Footer;
