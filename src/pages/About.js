import { useTitle } from "../hooks/useTitle";
import football from "../assets/football.jpg";
import resto from "../assets/resto.jpg";
import basket from "../assets/basket.jpg";

export const About = () => {
  useTitle("About");
  return (
    <>
      <div>
        <h1 className="text-center text-4xl"> Learn more about</h1>
        <h2 className="text-2xl font-bold ml-5"> Our Campus</h2>
      </div>
      <section className="my-10">
        <div id="football-field" className="mb-10 ">
          <p className="text-center text-2xl">
            Our Football field is open to all students for extracurricular
            activities
          </p>
          <img
            src={football}
            alt="logo"
            className="h-screen w-screen px-10 rounded-lg"
          />
        </div>
        <div id="basket-field" className="mb-10">
          <p className="text-center text-2xl">
            Students that do play exceptionally in ou school team are give the
            chance to audition for the a position in the bantional basket ball
            team .
          </p>
          <img
            src={basket}
            alt="logo"
            className="h-screen w-screen px-10 rounded-lg "
          />
        </div>
        <div id="resto">
          <p className="text-center text-2xl">
            Our School restaurant is open to all students and teachers. We have
            well trained cheifs to cook healthy and delicious meals for
            students. Accompanied with every meal is a fruit juice to help
            energize the students and help boost their memory capacity.
          </p>
          <img
            src={resto}
            alt="logo"
            className="h-screen w-screen px-10 rounded-lg"
          />
        </div>
      </section>
    </>
  );
};
