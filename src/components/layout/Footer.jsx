import React from "react";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Opening from "./components/Opening";
import Newslatter from "./components/Newslatter";
import Bottom from "./components/Bottom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Company />
          {/* Contact */}
          <Contact />

          {/* Opening */}
          <Opening />

          {/* Newsletter */}
          <Newslatter />
        </div>

        {/* Bottom Section */}
        <Bottom />
      </div>
    </footer>
  );
};

export default Footer;
