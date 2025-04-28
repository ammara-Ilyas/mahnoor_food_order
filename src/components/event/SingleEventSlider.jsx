import React,{useState} from 'react'
import Image from 'next/image';
const SingleEventSlider = () => {
    const images = [
      "/images/bg-hero.jpg",
      "/images/bg-hero.jpg",
      "/images/bg-hero.jpg",
      "/images/bg-hero.jpg",
      "/images/bg-hero.jpg",
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <div className="flex flex-col w-full border-2">
        {/* Main Image */}
        <div className="w-full   h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
            width={500}
            height={500}
          />
        </div>
  
        {/* Thumbnails */}
        <div className="mt-4 w-full flex gap-2 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-28 h-20 border-2 ${
                currentImageIndex === index
                  ? "border-blue-500"
                  : "border-gray-300"
              } rounded-lg overflow-hidden`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

export default SingleEventSlider
