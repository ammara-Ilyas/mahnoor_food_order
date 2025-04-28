"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Category } from "../miniWidgets/Heading";
const MenuCategory = ({ category, img }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  });
  return (
    <section
      className="relative h-[30vh] mx-9 rounded-lg bg-black bg-opacity-50 "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60  rounded-lg h-full ">
        <div className="flex items-center justify-center h-full">
          <h3
            className="text-white font-bold capitalize text-2xl sm:text-6xl  letter-wide "
            data-aos="fade-down"
            data-aos-delay={50}
          >
            <Category text={category} />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
