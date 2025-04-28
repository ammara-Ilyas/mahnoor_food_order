import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 s uppercase text-white hover:bg-orange-600 font-serif py-3 px-6 rounded-sm">
      {text}
    </button>
  );
};

export default Button;
