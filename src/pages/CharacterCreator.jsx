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
      <InvestigatorBase />
      <InvestigatorStats />
      <InvestigatorSkills />
    </div>
  );
};

export default CharacterCreator;
