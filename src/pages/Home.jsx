import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white py-5 h-screen">
      <h1 className="text-5xl font-black text-center">
        Call of Cthulhu 7e Character Creator
      </h1>
      <div>
        <ul className="flex flex-row gap-4 justify-center font-bold mt-5">
          {/* Buttons for character creation BEGIN */}
          <li>
            <Link className="bg-stone-300 p-2 rounded-md">
              Quickstart Character
            </Link>
          </li>
          <li>
            <Link className="bg-stone-300 p-2 rounded-md">
              Standard Character
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
