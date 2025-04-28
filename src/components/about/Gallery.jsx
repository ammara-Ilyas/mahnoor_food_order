import Image from "next/image";
import { HeadingText } from "../miniWidgets/Heading";

const ImageGallery = () => {
  const images = [
    "/images/about/about-1.jpg",
    "/images/res.jpg",
    "/images/about/about-2.jpg",
    "/images/hero.png",
    "/images/about/about-3.jpg",
    "/images/res.jpg",
    "/images/about/about-4.jpg",
    "/images/hero.png",
    "/images/about/about-1.jpg",
    "/images/res.jpg",
    "/images/about/about-2.jpg",
    "/images/res.jpg",
    "/images/hero.png",
    "/images/res.jpg",
    "/images/about/about-3.jpg",
  ];

  return (
    <div className="container p-4 w-[80%] mx-auto mt-10">
      <HeadingText heading="YummyYatch Gallery" text="Image Gallery" />
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
