"use client";
import React, { useEffect } from "react";
import ChefCard from "../miniWidgets/Card";
import Heading from "../miniWidgets/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
const chefsData = [
  {
    name: "Walter White",
    title: "Master Chef",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    imgSrc: "/images/chef/chefs-1.jpg",
  },
  {
    name: "Sarah Jhonson",
    title: "Patissier",
    description:
      "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
    imgSrc: "/images/chef/chefs-2.jpg",
  },
  {
    name: "William Anderson",
    title: "Cook",
    description:
      "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
    imgSrc: "/images/chef/chefs-3.jpg",
  },
];

const ChefsCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div className="flex flex-col items-center  justify-center my-20">
      <div className="flex items-center w-[70%] justify-center">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <Heading text="Team Members" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black text-3xl sm:text-4xl font-serif font-bold mb-2 letter-wide">
        Our Master Chefs
      </h2>
      <div className="flex w-[85%] lg:w-[95%] xl:w-[85%] mx-auto flex-wrap justify-center gap-2 py-8">
        {chefsData.map((chef, index) => (
          <div
            className="w-[100%] sm:w-[80%] md:w-[45%] lg:w-[30%] mt-2"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            key={index}
          >
            <ChefCard chef={chef} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsCard;
