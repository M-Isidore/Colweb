import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Colweb");
  const navigate = useNavigate();
  const [log, setLog] = useState(JSON.parse(localStorage.getItem("log")) || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newLog = {
      id: date.getTime(),
      name: e.target.name?.value,
      matricule: e.target.matricule?.value,
    };
    setLog([...log, newLog]);
  };

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
    // if (log) {
    //   navigate("/welcome");
    // }
  }, [log]);

  return (
    <div className="bg-slate-800 ">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto h-screen">
        <div className="pt-36 rounded-xl">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="matricule"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your Matricule
          </label>
          <input
            type="text"
            id="matricule"
            className="shadow-xs bg-gray-50 border 
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
            autoComplete="off"
          />
        </div>

        <button
          onClick={navigate("/welcome")}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>

      <Footer />
    </div>
  );
};
