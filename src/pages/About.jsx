import React from "react";

const About = () => {
  return (
    <div>
      <div className="px-8 py-6 ">
        <h1 className="text-5xl font-black">About Us</h1>
      </div>
      <div className=" px-6 py-6 bg-slate-800 flex flex-row">
        <p className="text-gray-200 p-2">
          We love H.P. Lovecraft, his stories, his mythos and of course the
          TTRPG Call of Cthulhu (by Chaosium). This site was built to help Game
          Masters run their games in a much more streamlined manner. Characters
          are prone to... death, in Call of Cthulhu and this site is here to
          help players and keepers generate their own characters in the shortest
          amount of time. Currently, we offer two types of character generation:
          Quick Start and Classic. Quick Start reflects the rules given in
          Chaosium's free Call of Cthulhu starter rules. Classic is the standard
          way to generate a character.
        </p>
        <img
          src="/images/AncientNecromancer.jpeg"
          alt="Ancient Necromancer"
          className="max-h-[500px] max-w-[600px] p-2"
        />
      </div>
    </div>
  );
};

export default About;
