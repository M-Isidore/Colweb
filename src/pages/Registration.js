import { useTitle } from "../hooks/useTitle";
import payment from "../assets/payment.jpg";
import accepted from "../assets/accepted.jpg";
import card from "../assets/card.jpg";

export const Registration = () => {
  useTitle("Registration");
  return (
    <>
      <div>
        <h1 className="text-center text-4xl mt-5">Gain Admission with us!</h1>
        <h2 className="text-center text-sm italic">
          we have graduated over 3000+ students
        </h2>

        <p className="mt-7 ml-7 mr-10 pl-5 bg-slate-950  text-white text-3xl font-mono">
          Our Admission Program
        </p>
      </div>
      <section className="grid grid-cols-2 grid-rows-3 gap-20 my-20 ml-10">
        <div>
          <h1 className="font-mono text-2xl font-bold text-center">
            How much is fee?
          </h1>
          <p className="font-serif indent-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum reiciendis quia mollitia atque similique assumenda in est
            eveniet reprehenderit. Delectus consequatur eius non nisi eaque ab
            consectetur quod praesentium?
          </p>
        </div>
        <div>
          <img src={payment} alt="logo" className="h-72 w-72 rounded-lg" />
        </div>
        <div>
          <h1 className="font-mono text-2xl font-bold text-center">
            Where do I pay?
          </h1>
          <p className="font-serif  indent-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum reiciendis quia mollitia atque similique assumenda in est
            eveniet reprehenderit. Delectus consequatur eius non nisi eaque ab
            consectetur quod praesentium?
          </p>
        </div>
        <div>
          <img src={card} alt="logo" className="h-72 w-72 rounded-lg" />
        </div>
        <div>
          <h1 className="font-mono text-2xl font-bold text-center">
            What are the requirements?
          </h1>
          <p className="font-serif  indent-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum reiciendis quia mollitia atque similique assumenda in est
            eveniet reprehenderit. Delectus consequatur eius non nisi eaque ab
            consectetur quod praesentium?
          </p>
        </div>
        <div>
          <img src={accepted} alt="logo" className="h-72 w-72 rounded-lg" />
        </div>
      </section>

      <h2 className="text-center text-4xl mt-5 mb-10">
        Our Scholarship programs include...
      </h2>
    </>
  );
};
