"use client";
import React, { useEffect } from "react";
import ContactForm from "@/components/auth/ContactForm";
import HeroSection from "@/components/miniWidgets/HeroSection";
import ContactInfo from "@/components/auth/ContactInfo";
import Heading from "@/components/miniWidgets/Heading";
import EmbeddedMap from "@/components/auth/Map";

const page = () => {
  useEffect(() => {});
  return (
    <>
      <HeroSection text="Contact Us" />
      <div className=" my-6 mt-20 flex flex-col items-center">
        {" "}
        <div className="flex items-center w-[70%] justify-center ">
          {" "}
          <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
          <div className="w-auto">
            {" "}
            <Heading text="Contact Us" />
          </div>{" "}
          <span className="h-[2px] w-[8%] text-center border-[1px]  rounded-md border-custom-color"></span>{" "}
        </div>
        <h2 className="text-black mb-6 text-4xl font-serif font-bold  letter-wide">
          Contact For Any Query
        </h2>
      </div>
      <EmbeddedMap />
      <ContactInfo />

      <ContactForm />
    </>
  );
};

export default page;
