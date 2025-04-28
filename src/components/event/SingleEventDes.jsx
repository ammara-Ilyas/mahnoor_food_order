"use client";
import Link from "next/link";
import React, { useState } from "react";

const sections = [
  { id: "#overview", label: "Overview" },
  { id: "#photo", label: "Photo" },
  { id: "#menu", label: "Menu" },
  { id: "#review", label: "Review" },
];
export const ScrollToSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* Navigation Links */}
      <div className="flex space-x-4 bg-orange-600 text-white my-3 font-semibold rounded-t-lg py-1 ">
        {sections.map((section) => (
          <Link href={section.id} key={section.id}>
            {" "}
            <button
              onClick={() => handleScroll(section.id)}
              className="px-4 py-2  rounded-md transition-all duration-200 capitalize"
            >
              {section.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SingleEventDes = ({ detail, tags }) => {
  const [showFullText, setShowFullText] = useState(false);

  // Define a character limit for the shortened text
  const characterLimit = 350;

  return (
    <div>
      <ScrollToSection />

      <div className="flex jb items-center justify-center gap-4 mx-auto">
        {tags &&
          tags.map((btn, i) => (
            <button
              className="border-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 duration-300 transition-all ease-in-out cursor-text"
              key={i}
            >
              {btn}
            </button>
          ))}
      </div>

      <div className="mt-6" id="overview">
        <h2 className="text-lg font-bold px-4 rounded-t-lg">Overview</h2>
        <div className="mt-3 px-6">
          <p className="text-gray-600 leading-6">
            {showFullText ? detail : `${detail.slice(0, characterLimit)}...`}
          </p>

          {detail.length > characterLimit && (
            <span
              className="text-orange-600 text-sm cursor-pointer hover:text-orange-700"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "Read less" : "Read more"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleEventDes;
