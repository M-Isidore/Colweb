import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Loader from "../components/Loader";

export const Courses = () => {
  useTitle("Courses");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/courses");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourses(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center mt-7 font-mono text-2xl">
          We have the best equipments and tools to help you study in any field
          you choose.
        </h1>
        <p className="text-center my-5 font-mono text-2xl">
          Make a choice today!
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-4 grid-rows-3 gap-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to="/">
                <img
                  className="rounded-t-lg"
                  src={course.image}
                  alt={course.name}
                />
              </Link>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {course.name}
                </h5>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};
