import { useTitle } from "../hooks/useTitle";

export const Partners = () => {
  useTitle("Partners");
  return (
    // <div
    //   className="h-auto w-auto bg-no-repeat"
    //   style={{ backgroundImage: `url(${Homebackground})` }}
    // >
    //   {/* <p>Weeeeeeeeeeeee</p> */}
    // </div>
    <div className="bg-url('/pexel.png') h-screen bg-no-repeat"></div>
  );
};
