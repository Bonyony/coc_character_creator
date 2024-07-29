import React from "react";
import { Link } from "react-router-dom";
import cultistImg from "../../public/images/CultistArt.jpg";

const Home = () => {
  return (
    <div className="bg-[url('../../public/images/CultistArt.jpg')] py-5 h-screen mix-blend-lighten">
      <h1 className="text-5xl text-white font-black text-center mix-blend-lighten bg-clip-text">
        Call of Cthulhu 7e Character Creator
      </h1>
      <div>
        <ul className="flex flex-row gap-4 justify-center  mt-5">
          {/* Buttons for character creation BEGIN */}
          <li>
            <Link
              to={"/create"}
              className="bg-indigo-600 p-2 text-lg text-slate-100 rounded-md hover:bg-indigo-800 transition-all duration-100"
            >
              Quickstart Character
            </Link>
          </li>
          <li>
            <Link
              to={"/create"}
              className="bg-indigo-600 p-2 text-lg text-slate-100 rounded-md hover:bg-indigo-800 transition-all duration-100"
            >
              Standard Character
            </Link>
          </li>
        </ul>
      </div>
      {/* <img className="" src={cultistImg} alt="Necromancer image" /> */}
    </div>
  );
};

export default Home;
