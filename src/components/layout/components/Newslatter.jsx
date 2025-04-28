import React from "react";

const Newslatter = () => {
  return (
    <div>
      <h4 className="text-lg text-orange-400 font-semibold mb-4">Newsletter</h4>
      <p className="mb-4">
        Dolor amet sit justo amet elitr clita ipsum elitr est.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-l bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Newslatter;
