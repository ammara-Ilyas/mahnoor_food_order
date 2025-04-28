import React from "react";

const Bottom = () => {
  return (
    <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>
        © Mahnoor Fatima, All Right Reserved. Designed By HTML Codex{" "}
        <a
          href="https://htmlcodex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-white"
        >
          HTML Codex
        </a>
      </p>
      <p>
        Distributed By{" "}
        <a
          href="https://themewagon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-white"
        >
          Yummy Yatch
        </a>
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">
          Home
        </a>
        <a href="#" className="hover:text-white">
          Cookies
        </a>
        <a href="#" className="hover:text-white">
          Help
        </a>
        <a href="#" className="hover:text-white">
          FAQs
        </a>
      </div>
    </div>
  );
};

export default Bottom;
