"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "../miniWidgets/Slider";
// const images = [
//   {
//     image: "/images/venues/event_03.png",
//     id: 1,
//   },
//   {
//     image: "/images/venues/event_02.png",
//     id: 2,
//   },
//   {
//     image: "/images/venues/event_01.avif",
//     id: 3,
//   },
//   {
//     image: "/images/bg-hero.jpg",
//     id: 4,
//   },
//   {
//     image: "/images/bg-hero.jpg",
//     id: 5,
//   },
// ];
const Gallery = ({ images }) => {
  console.log("images in gallery", images);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImages = images.slice(1, 6);
  const firstImg = images[0];
  const lastImg = images[images.length - 1];
  // console.log("last ", firstImg);

  // console.log("images in gallery", images);

  return (
    <div id="photo" className="border rounded-lg shadow-md mt-5">
      <h2 className="text-lg font-bold mb-12 bg-orange-600 text-white py-2 px-4 rounded-t-lg">
        Gallery
      </h2>
      <div className="grid my-5 grid-cols-3 grid-rows-[repeat(3,_150px)] gap-2 w-[90%] mx-auto ">
        {/* Large Image */}
        <div className="row-span-2 relative  ">
          <Image
            src={firstImg}
            alt="Large Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Smaller Images */}
        {selectedImages.map((img, index) => (
          <div key={index} className="relative  ran h-[150px] ">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
        <div
          className="col-span-2 relative h-[150px] "
          onClick={() => setSelectedIndex(4)}
        >
          <Image
            src={lastImg}
            alt="Large Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />{" "}
          <div className="h-[150px] rounded-md w-full bg-black/50 text-white font-semibold text-2xl absolute top-0 right-0">
            <div className="flex items-center h-full cursor-pointer justify-center ">
              {" "}
              <p className=""> {images.length}+</p>
            </div>{" "}
          </div>
        </div>
      </div>
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>

          {/* Slider component */}
          <Slider sliderData={images} initialIndex={selectedIndex} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
