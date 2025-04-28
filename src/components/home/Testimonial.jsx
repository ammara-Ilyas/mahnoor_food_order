"use client";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../miniWidgets/Heading";

const CustomDot = ({ onClick, ...rest }) => {
  const { active, index } = rest;
  // console.log("rest", rest);

  const handleClick = () => {
    console.log(`Dot clicked for card index: ${index}`);
    onClick();
  };

  return (
    <li
      style={{
        display: "inline-block",
        cursor: "pointer",
        background: active ? "#FF5722" : "#CCC",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        margin: "4px",
      }}
      onClick={handleClick}
    />
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Client 1",
      profession: "Designer",
      image: "/images/testimonial/testimonial-1.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Client 2",
      profession: "Developer",
      image: "/images/testimonial/testimonial-2.jpg",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Client 3",
      profession: "Manager",
      image: "/images/testimonial/testimonial-3.jpg",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      name: "Client 2",
      profession: "Developer",
      image: "/images/testimonial/testimonial-2.jpg",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const centerActiveCard = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
    setActiveIndex(index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 4 items on desktop
      partialVisibilityGutter: 30, // Adjust gutter between cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };
  return (
    <div className="flex flex-col justify-between my-20">
      <div className="flex items-center mb-2 w-[70%] justify-center mx-auto">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <Heading text="Testimonial" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black mb-6 text-3xl sm:text-4xl text-center font-serif font-bold  letter-wide">
        Our Clients Say!!!
      </h2>
      <div
        style={{
          position: "relative",
          backgroundImage: `url("/images/bg-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-20 pb-16 bg-black bg-opacity-70 px-28">
          <Carousel
            ref={carouselRef} // Attach the ref here
            additionalTransfrom={0}
            // arrows
            autoPlay
            showDots={true}
            autoPlaySpeed={3000}
            className="mb-12"
            containerClass="carousel-container"
            draggable
            focusOnSelect={true}
            infinite
            itemClass="carousel-item-padding-40-px"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderDotsOutside
            responsive={responsive}
            // dotListClass="custom-dot-list-style border-2 flex justify-center gap-2 mt-4"
            customDot={<CustomDot />}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
            swipeable
            afterChange={(nextSlideIndex) => setActiveIndex(nextSlideIndex)} // Track active index
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => centerActiveCard(index)} // Center the clicked card
                className={`w-[95%] bg-opacity-80 rounded-lg hover:bg-yellow-600 hover:text-white  ease-in-out overflow-hidden p-6 transition-all duration-500 ${
                  activeIndex % testimonials.length === index
                    ? "bg-white text-black"
                    : "bg-white text-black"
                }`}
              >
                <FaQuoteLeft className="text-4xl " />
                <p className="my-4">{testimonial.message}</p>
                <div className="flex items-center  gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
