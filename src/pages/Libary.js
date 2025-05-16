import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import Schlogo from "../assets/Schlogo.png";

export const Libary = () => {
  useTitle("Library");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:8000/libary");
      const data = await response.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <>
      <p className="text-center text-3xl mb-10">Welcome to the Libary</p>
      <section className="grid grid-cols-4 grid-rows-2 gap-3 ">
        {books.map((book) => (
          <div
            key={book.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="#">
              <img className="rounded-t-lg" src={Schlogo} alt="logo" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hope this helps you study and pass your exam!...Enjoy your study
              </p>
              <Link
                to="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Author: {book.Author}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
