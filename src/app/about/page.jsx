import React from "react";
import About from "@/components/home/About";
import HeroSection from "@/components/miniWidgets/HeroSection";
import ChefsCard from "@/components/home/Chef";
import History from "@/components/about/History";
import ImageGallery from "@/components/about/Gallery";

const page = () => {
  return (
    <>
      <HeroSection text="About Us" />
      <About />
      <ChefsCard />
      <ImageGallery />
      <History />
    </>
  );
};

export default page;
