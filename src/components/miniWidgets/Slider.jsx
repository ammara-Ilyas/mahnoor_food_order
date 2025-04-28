"use client";
import { useState } from "react";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";

const Slider = ({ sliderData, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Function to navigate to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl  mx-auto ">
      {/* Slider Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        style={{ zIndex: 20 }}
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        style={{ zIndex: 20 }}
      >
        <IoChevronForward />
      </button>
      {/* Slider Content */}
      <div className="overflow-hidden rounded-lg  ">
        <div
          className="flex transition-transform duration-500  "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex h-[500px] justify-center items-center bg-black/10 overflow-hidden relative"
            >
              {/* Image Container */}
              <div className="w-full mx-auto h-full relative">
                <Image
                  src={item}
                  alt={item}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* <div className="absolute bg-black bg-opacity-50  text-white p-4 rounded bottom-4 left-4">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* Pagination
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            } cursor-pointer`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
