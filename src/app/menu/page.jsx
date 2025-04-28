import React from "react";
import MenuSlider from "@/components/miniWidgets/MenuSlider";
import HeroSection from "@/components/miniWidgets/HeroSection";
import Heading from "@/components/miniWidgets/Heading";
import MenuList from "@/components/menu/MenuList";
const page = () => {
  return (
    <>
      <HeroSection text="Food Menu" />
      <div className=" my-6 mt-20 flex flex-col items-center">
        {" "}
        <div className="flex items-center w-[70%] justify-center ">
          {" "}
          <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
          <div className="w-autop">
            {" "}
            <Heading text="Food Menu" />
          </div>{" "}
          <span className="h-[2px] w-[8%] text-center border-[1px]  rounded-md border-custom-color"></span>{" "}
        </div>
        <h2 className="text-black mb-6 text-4xl font-serif font-bold  letter-wide">
          Most Popular Items
        </h2>
      </div>
      <MenuList />
    </>
  );
};

export default page;
