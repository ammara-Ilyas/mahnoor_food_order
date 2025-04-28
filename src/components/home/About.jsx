"use client";
import Head from "next/head";
import { useEffect } from "react";
import AboutSection from "./AboutSection";
import ImageGrid from "./ImageGrid";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  return (
    <>
      <Head>
        <title>Restoran</title>
        <meta name="description" content="Welcome to our restaurant!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-[85%] mx-auto mt-20 text-gray-900 font-sans ">
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Image Grid */}
            <div className=" w-[100%]  ml-2 xl:ml-7 mb-3 lg:mb-0">
              <ImageGrid />
            </div>
            <AboutSection />
          </div>
        </div>
      </main>
    </>
  );
}
