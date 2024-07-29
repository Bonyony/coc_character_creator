import React from "react";

const test = "test";

const InvestigatorStats = () => {
  return (
    <div id="characteristics" className=" p-6 bg-slate-300">
      <h2 className="text-lg font-bold">Characteristics:</h2>
      <form action="" className="m-4 ">
        <div className="grid grid-cols-3 ">
          <div>
            <label htmlFor="">STR: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">DEX: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">INT: </label>
            <input type="number" min={15} max={90} />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <label htmlFor="">CON: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">APP: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">POW: </label>
            <input type="number" min={15} max={90} />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <label htmlFor="">SIZ: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">EDU: </label>
            <input type="number" min={15} max={90} />
          </div>
          <div>
            <label htmlFor="">LUCK: </label>
            <input type="number" min={15} max={90} />
          </div>
        </div>
        <button className=" bg-indigo-600 py-1 min-w-20 text-lg text-slate-100 rounded-md hover:bg-indigo-800 transition-all duration-100">
          Roll
        </button>
      </form>
      <div id="derived-characteristics">
        <ul>
          <li>SAN: {test}</li>
          <li>HP: {test}</li>
          <li>MP: {test}</li>
          <li>MOVE: {test}</li>
          <li>BUILD: {test}</li>
          <li>Damage Bonus: {test}</li>
          <li>Personal Interest Points: {test}</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestigatorStats;
