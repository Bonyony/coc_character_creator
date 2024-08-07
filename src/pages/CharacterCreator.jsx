import React from "react";
import {
  InvestigatorBase,
  InvestigatorSkills,
  InvestigatorStats,
} from "../components";

const CharacterCreator = () => {
  return (
    <div id="main">
      <h1 className="text-5xl mx-8 my-6 font-black">
        Create a new Investigator
      </h1>
      <div className="flex flex-col justify-center">
        {/* Use hooks which allow for interactivity between the form data, there are a few useful ones */}
        <InvestigatorBase />
        <InvestigatorStats />
        <InvestigatorSkills />
      </div>
    </div>
  );
};

export default CharacterCreator;
