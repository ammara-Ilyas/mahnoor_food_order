"use client";
import { useState } from "react";

const MenuSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Trigger Image */}
      <img
        src="/menu-trigger.jpg" // Replace with your trigger image path
        alt="Menu Trigger"
        className="cursor-pointer w-full max-w-sm mx-auto"
        onClick={() => setShowCarousel(true)}
      />

      {/* Carousel Overlay */}
      {showCarousel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          style={{ display: showCarousel ? "flex" : "none" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setShowCarousel(false)}
          >
            &times;
          </button>

          {/* Carousel */}
          <div className="relative w-4/5 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].title}
              className="w-full h-64 object-cover"
            />

            {/* Product Details */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold">
                {products[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-500">
                {products[currentIndex].description}
              </p>
              <p className="text-lg font-bold text-red-600">
                ${products[currentIndex].price}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSlider;
