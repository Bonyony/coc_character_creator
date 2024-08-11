import React, { useReducer } from "react";

const test = "test";

const randomStatRoll = () => {
  return (Math.floor(Math.random() * 15) + 3) * 5;
};

const InvestigatorStats = () => {
  const [rollValue, setRollValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      str: "50",
      dex: "50",
      int: "50",
      con: "50",
      app: "50",
      pow: "50",
      siz: "50",
      edu: "50",
      luck: "50",
    }
  );
  const handleRoll = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(randomStatRoll());
    setRollValue({ [name]: value });
  };

  return (
    <div id="characteristics" className=" bg-inherit">
      <div className="m-4 px-4">
        <h2 className="text-3xl font-black ">Characteristics</h2>
        <form action="" className="">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="font-bold" htmlFor="">
                STR:{" "}
              </label>
              <input
                id="str"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                DEX:{" "}
              </label>
              <input
                id="dex"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                INT:{" "}
              </label>
              <input
                id="int"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label className="font-bold" htmlFor="">
                CON:{" "}
              </label>
              <input
                id="con"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                APP:{" "}
              </label>
              <input
                id="app"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                POW:{" "}
              </label>
              <input
                id="pow"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label className="font-bold" htmlFor="">
                SIZ:{" "}
              </label>
              <input
                id="siz"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                EDU:{" "}
              </label>
              <input
                id="edu"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                LUCK:{" "}
              </label>
              <input
                id="luck"
                type="number"
                min={15}
                max={90}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-5 flex justify-center">
            <button
              onClick={handleRoll}
              className="w-1/3 bg-indigo-600 py-1 min-w-20 text-lg text-slate-100 rounded-md hover:bg-indigo-800 transition-all duration-100"
            >
              Roll Again
            </button>
          </div>
        </form>
        <div id="derived-characteristics">
          <h3 className="text-xl font-bold">Derived Stats</h3>
          <ul className="grid grid-cols-3 mt-4">
            <li className="font-bold">SAN: {test}</li>
            <li className="font-bold">HP: {test}</li>
            <li className="font-bold">MP: {test}</li>
            <li className="font-bold">MOVE: {test}</li>
            <li className="font-bold">BUILD: {test}</li>
            <li className="font-bold">Damage Bonus: {test}</li>
            <li className="font-bold">Personal Interest Points: {test}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorStats;
