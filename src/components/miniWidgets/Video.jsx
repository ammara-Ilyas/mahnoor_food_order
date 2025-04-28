"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
const VideoPlayer = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div className="relative h-full" data-aos="zoom-in" data-aos-delay={300}>
      {isVideoPlaying ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center animate-slideIn"
          style={{ zIndex: 1000 }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_U2qYgCdxCg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
          <button
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-5 right-5 bg-white text-black font-bold rounded-full px-[14px] py-2 shadow-md hover:bg-gray-200"
          >
            X
          </button>
        </div>
      ) : (
        <>
          <Image
            src="/images/res.jpg"
            alt="Dining"
            width={500}
            height={500}
            className=" shadow-lg object-cover  h-full w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              onClick={handlePlayButtonClick}
              className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-5.197-3.507A1 1 0 008 8.507v6.986a1 1 0 001.555.832l5.197-3.507a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
