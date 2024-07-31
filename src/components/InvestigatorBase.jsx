import React from "react";

const InvestigatorBase = () => {
  return (
    <div id="investigator" className="bg-inherit">
      <div className="m-4 px-4">
        <h2 className="text-3xl font-black ">Who are you?</h2>
        <form>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="mb-2">
              <label htmlFor="name" className="font-bold">
                Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jimbo Jones"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="sex" className="font-bold">
                Sex:{" "}
              </label>
              <input
                type="text"
                placeholder="Male/Female/Eldritch Horror"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age" className="font-bold">
                Age:{" "}
              </label>
              <input
                type="number"
                min={14}
                max={120}
                placeholder={42}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="nationality" className="font-bold">
                Nationality:{" "}
              </label>
              <input
                type="text"
                placeholder="French"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="residence" className="font-bold">
                Residence:{" "}
              </label>
              <input
                type="text"
                placeholder="Berlin, Germany"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* This will have many options and is required */}
            <div className="mb-2">
              <label htmlFor="name" className="font-bold">
                Occupation:{" "}
              </label>
              <input
                type="text"
                name="occupation"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
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

export default InvestigatorBase;
