import React from "react";
import { PiForkKnifeFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className=" flex flex-row items-center ">
      <span className="text-4xl text-orange-600 ">
        <PiForkKnifeFill className="text-orange-600" />
      </span>
      <div className="flex flex-col items-center">
        <span className="h-[5px] w-full bg-orange-600 rounded-lg"></span>
        <p className="text-white uppercase text-2xl font-bold">Yumyyatch</p>
        <span className="h-[5px] w-full bg-orange-600 rounded-lg"></span>
      </div>
    </div>
  );
};

export default Logo;
