import  { useEffect } from 'react';
import { useState } from "react";
import Container from "../components/Container";
import { fonts  } from "../constants";
import { SlEye } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Fonts = () => {
  const [showModal, setShowModal] = useState(false);
  const [indexModalActive, setIndexModalActive] = useState(null);

  const handleClick = (logo) => {
    logo.link
      ? window.open(logo.link, "_blank")
      : window.open(
          `https://api.whatsapp.com/send/?phone=6282370323310&text=Hello+Johandika%2C+I+would+like+to+purchase+your+logo+named+:+'${logo.name}'+for+USD+${logo.price}.&type=phone_number&app_absent=0`,
          "_blank"
        );
  };
  
  return (
    <Container className="font-Poppins">
      <h1 className="flex justify-center font-SpaceMono text-4xl underline mt-32">
        Fonts Gallery
      </h1>
      <div className="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  my-16">
        {fonts.map((font, index) => (
          <figure key={font.name}>
            {/* Modal Full gambar */}
            {showModal && (
            <div
              className="z-50 fixed inset-0 bg-Black/70 flex justify-center items-center"
            >
               <Carousel className="h-2/6 sm:h-3/6 lg:h-4/6 w-5/6 sm:w-4/6 lg:w-3/6 bg-black relative"
              >
                   <IoIosCloseCircleOutline
                    size={40}
                    className="absolute -right-4 -top-4 bg-Black/90 cursor-pointer rounded-full z-50"
                    onClick={()=> setShowModal(false)}
                  />
                  <CarouselContent>
                      <CarouselItem> <img
                      src={fonts[indexModalActive].image}
                      alt={fonts[indexModalActive].name}
                      className="h-full w-full object-cover "
                      /></CarouselItem>
                      <CarouselItem> <img
                      src={fonts[indexModalActive].image}
                      alt={fonts[indexModalActive].name}
                      className="h-full w-full object-cover "
                      /></CarouselItem>
                    </CarouselContent>
                  <CarouselPrevious size={100}/>
                  <CarouselNext />
                </Carousel>
              </div>
            )}
            <div className="bg-gray-800  p-3 rounded-md">
              <div className="h-auto sm:h-auto w-full bg-gray-200 rounded-md overflow-hidden items-center flex relative">
                {!font.available && (
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
                  src={font.image}
                  alt={font.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <figcaption className="text-sm flex mt-2">
                <div className="w-full text-sm">
                  <p>{font.name}</p>
                  <p
                    className={`text-green-600 font-semibold text-sm`}
                  >
                    <span className={`${!font.available && "text-gray-500"}`}>
                      {font.price}
                    </span>
                    &nbsp;
                   
                  </p>
                </div>
                <button
                  className={`flex justify-center items-center  rounded-md  self-center px-3 py-1 hover:bg-red-900 bg-RedDarkest`}
                  onClick={() => handleClick(font)}
                >
                  Download
                </button>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Container>
  );
};

export default Fonts;
