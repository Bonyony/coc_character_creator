import React from "react";

const InvestigatorSkills = () => {
  return (
    <div id="skills">
      <div className="m-4 px-4">
        <h2 className="text-3xl font-black ">Skills</h2>

        <form>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="mb-2 flex flex-row justify-evenly">
              <label htmlFor="name" className="font-bold mt-1">
                Accounting:{" "}
              </label>
              <input
                type="number"
                placeholder="05"
                min={5}
                max={99}
                className="block w-full rounded-md border-0 ml-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mb-2 flex flex-row justify-evenly">
              <label htmlFor="name" className="font-bold mt-1">
                Anthropology:{" "}
              </label>
              <input
                type="number"
                placeholder="01"
                min={1}
                max={99}
                className="block w-full rounded-md border-0 ml-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mb-2 flex flex-row justify-evenly">
              <label htmlFor="name" className="font-bold mt-1">
                Appraise:{" "}
              </label>
              <input
                type="number"
                placeholder="05"
                min={5}
                max={99}
                className="block w-full rounded-md border-0 ml-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="my-5 flex justify-center">
            <button
              type="submit"
              className="w-1/3 bg-indigo-600 py-1 min-w-20 text-lg text-slate-100 rounded-md hover:bg-indigo-800 transition-all duration-100"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvestigatorSkills;
