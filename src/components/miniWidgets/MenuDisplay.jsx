"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Slider from "./Slider";
import CircularProgress from "@mui/material/CircularProgress";
export const MenuDisplay = ({ menu }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-1  border-red-900 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-6">
          {menu.map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-4  border-[1px] rounded-md shadow-md px-5 py-3"
            >
              <div
                className="w-20 h-20 relative"
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.des}</p>
              </div>
              <p className="text-lg font-bold text-orange-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Render the modal for the Slider */}
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={handleClose}
          >
            &times;
          </button>

          {/* Slider component */}
          <Slider sliderData={menu} initialIndex={selectedIndex} />
        </div>
      )}
    </>
  );
};

export const MenuFood = () => {
  const { menuList, FilteredMenuList, loading } = useMenu();
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Function to close the modal
  const handleClose = () => {
    setSelectedIndex(null);
  };
  let displayItem = FilteredMenuList.slice(0, 8);
  return (
    <>
      <div>
        {loading ? (
          // Show MUI CircularProgress when loading is true
          <div className="flex justify-center items-center h-40 ">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
            {displayItem.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <div className=" rounded-md  rotate-45">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-lg  w-[160px]"
                    onClick={() => setSelectedIndex(i)}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <span className="text-lg font-bold text-orange-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={handleClose}
          >
            &times;
          </button>

          {/* Slider component */}
          <Slider sliderData={FilteredMenuList} initialIndex={selectedIndex} />
        </div>
      )}
    </>
  );
};
