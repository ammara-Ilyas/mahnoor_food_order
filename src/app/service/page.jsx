import React from "react";
import FeatureCards from "@/components/home/Feature";
import HeroSection from "@/components/miniWidgets/HeroSection";
import { EventGrid } from "@/components/home/Event";
import { HeadingText } from "@/components/miniWidgets/Heading";
const page = () => {
  return (
    <>
      <HeroSection text="Services" />
      <div className="mt-9">
        <HeadingText heading="Our Special Events" text="Event" />
        <EventGrid />
        <FeatureCards />
      </div>
    </>
  );
};

export default page;
