import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Welcome = () => {
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);

  const changeAdd = () => {
    setAdd(!add);
  };

  const toLibary = () => {
    navigate("/libary");
  };

  const log = JSON.parse(localStorage.getItem("log"));
  useTitle("Welcome");
  console.log(log);

  return (
    <>
      <div>
        <h1 className="text-center text-5xl animate-pulse ">Welcome Friend</h1>
        <h1 className="mt-10 text-xl ml-10 font-extrabold">
          What would you like to do today?
        </h1>
      </div>
      <section className="flex flex-col mx-32 mt-10 ">
        <button
          onClick={toLibary}
          type="button"
          className="text-white mb-10  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-5xl font-serif  px-5 py-20 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Study
        </button>
        <button
          onClick={changeAdd}
          type="button"
          className="text-white mb-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-5xl font-serif  px-5 py-20 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Add notes
        </button>

        {add ? (
          <div className="mb-10">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Notes
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              type="submit"
              className="inline-flex mt-5 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Store note
            </button>
          </div>
        ) : null}

        <button
          type="button"
          className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-5xl font-serif  px-5 py-20 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Read notes
        </button>
      </section>
    </>
  );
};
