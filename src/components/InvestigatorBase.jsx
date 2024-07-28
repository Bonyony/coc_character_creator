import React from "react";

const InvestigatorBase = () => {
  return (
    <div id="investigator" className="bg-stone-300">
      <table className="m-4 ">
        <thead>
          <h2 className="text-lg font-bold">Who are you?</h2>
        </thead>
        <tbody className="grid grid-cols-2 gap-2">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Jimbo Jones" required />
          <label htmlFor="sex">Sex: </label>
          <input type="text" />
          <label htmlFor="age">Age: </label>
          <input type="number" />
          <label htmlFor="nationality">Nationality: </label>
          <input type="text" />
          <label htmlFor="residence">Residence: </label>
          <input type="text" />

          {/* This will have many options and is required */}
          <label htmlFor="name">Occupation: </label>
          <input type="text" name="occupation" required />
        </tbody>
      </table>
    </div>
  );
};

export default InvestigatorBase;
