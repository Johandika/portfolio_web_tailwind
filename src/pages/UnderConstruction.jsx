import { underconstruction } from "../assets/images";

const UnderConstruction = () => {
  const path = window.location.pathname;
  const productName = path.split("/products/")[1].toUpperCase();

  return (
    <div className="font-Poppins flex justify-center items-center h-screen flex-col m-7 text-center gap-6">
      <img
        src={underconstruction}
        alt="Under Construction Image"
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12"
      />
      <h2 className="text-white opacity-70">
        This <span className="font-mono text-lg">'{productName} PAGE'</span> is
        under construction!
      </h2>
    </div>
  );
};

export default UnderConstruction;
