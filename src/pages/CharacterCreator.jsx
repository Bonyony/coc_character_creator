import React from "react";
import {
  InvestigatorBase,
  InvestigatorSkills,
  InvestigatorStats,
} from "../components";

const CharacterCreator = () => {
  return (
    <div id="main">
      <h1 className="text-4xl mx-5 my-6 font-black">
        Create a new Investigator
      </h1>
      <div className="flex flex-col justify-center">
        <InvestigatorBase />
        <InvestigatorStats />
        <InvestigatorSkills />
      </div>
    </div>
  );
};

export default CharacterCreator;
