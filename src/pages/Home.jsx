import React from "react";

const Home = () => {
  return (
    <div className="bg-white py-5 h-screen">
      <h1 className="text-5xl font-black text-center">
        Call of Cthulhu 7e Character Creator
      </h1>
      <div>
        <ul className="flex flex-row gap-4 justify-center font-bold">
          <li>Quickstart Character</li>
          <li>Standard Character</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
