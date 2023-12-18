import { useState } from "react";
import Container from "../components/Container";
import { logoForSale } from "../constants";
import { SlEye } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Logo = () => {
  const [showModal, setShowModal] = useState(false);
  const [indexModalActive, setIndexModalActive] = useState(null);

  return (
    <Container className="font-Poppins">
      <h1 className="flex justify-center font-SpaceMono text-4xl underline mt-32">
        Logo Gallery
      </h1>
      <div className="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  my-16">
        {logoForSale.map((logo, index) => (
          <figure key={logo.name}>
            {/* Modal Full gambar */}
            {showModal && (
              <div
                className="z-50 fixed inset-0 bg-Black/70 flex justify-center items-center"
                onClick={() => {
                  setShowModal(false);
                  setIndexModalActive(null);
                }}
              >
                <div className="h-2/6 sm:h-3/6 lg:h-4/6 w-5/6 sm:w-4/6 lg:w-3/6 bg-yellow-700 relative ">
                  {/* Badge Sold */}
                  <div className="overflow-hidden w-full h-full absolute">
                    {!logoForSale[indexModalActive].available && (
                      <div className="bg-RedDarkest/90 absolute h-12 w-40 flex justify-center items-center font-bold tracking-widest -rotate-45 -left-12 top-2 text-lg">
                        SOLD
                      </div>
                    )}
                  </div>
                  {/* Close Icon */}
                  <IoIosCloseCircleOutline
                    size={40}
                    className="absolute -right-4 -top-4 bg-Black/90 cursor-pointer rounded-full"
                  />
                  <img
                    src={logoForSale[indexModalActive].image}
                    alt={logoForSale[indexModalActive].name}
                    className="h-full w-full object-cover "
                  />
                </div>
              </div>
            )}
            <div className="bg-gray-800  p-3 rounded-md">
              <div className="h-48 sm:h-40 w-full bg-gray-200 rounded-md overflow-hidden items-center flex relative">
                {!logo.available && (
                  <div className="bg-RedDarkest/90 absolute h-12 w-40 flex justify-center items-center font-bold tracking-widest -rotate-45 -left-12 top-2 text-lg">
                    SOLD
                  </div>
                )}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 bg-Black/80 transition flex justify-center items-center cursor-pointer flex-col"
                  onClick={() => {
                    setShowModal(true);
                    setIndexModalActive(index);
                  }}
                >
                  <SlEye size={40} />
                  <p className="text-xs tracking-widest">View</p>
                </div>
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <figcaption className="text-sm flex mt-2">
                <div className="w-full text-sm">
                  <p>{logo.name}</p>
                  <p
                    className={`${
                      logo.available === true
                        ? "text-green-600"
                        : "text-RedDarkest"
                    } font-semibold text-sm`}
                  >
                    <span className={`${!logo.available && "text-gray-500"}`}>
                      ${logo.price}
                    </span>
                    &nbsp;
                    <span className="text-gray-500 font-normal text-xs">
                      (USD)
                    </span>
                  </p>
                </div>
                <button
                  className={`flex justify-center items-center  rounded-md  self-center px-3 py-1 hover:bg-red-900 ${
                    !logo.available
                      ? "pointer-events-none bg-gray-950 text-gray-400"
                      : "bg-RedDarkest"
                  }`}
                  onClick={() => window.open(logo.link, "_blank")}
                >
                  {logo.available ? "Buy" : "Sold"}
                </button>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Container>
  );
};

export default Logo;
