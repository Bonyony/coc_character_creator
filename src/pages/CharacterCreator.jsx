import React from "react";
import {
  InvestigatorBase,
  InvestigatorSkills,
  InvestigatorStats,
} from "../components";

const CharacterCreator = () => {
  return (
    <div id="main">
      <h1 className="text-3xl mx-5 my-2 font-bold">
        Create a new Investigator
      </h1>
      <InvestigatorBase />
      <InvestigatorStats />
      <InvestigatorSkills />
    </div>
  );
};

export default CharacterCreator;
