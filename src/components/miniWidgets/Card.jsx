import { iconButtonClasses } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Party } from "./Heading";

const ChefCard = ({ chef }) => {
  const icons = [
    { id: "facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
    { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
    { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { id: "twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    { id: "youtube", icon: <FaYoutube />, link: "https://youtube.com" },
  ];
  return (
    <div className="relative w-[95%] bg-white  group hover:scale-105 duration-500 transition-all ease-in-out  rounded-lg shadow-lg overflow-hidden water-flow-animation">
      {/* Image Section */}
      <div className="relative h-[350px]">
        <Image
          src={chef.imgSrc}
          alt={chef.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute -bottom-1 left-0  w-full wave-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className=" text-white fill-current wave-animation "
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L40,96C80,96,160,96,240,117.3C320,139,400,181,480,186.7C560,192,640,160,720,144C800,128,880,128,960,138.7C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 text-center">
        <h2 className="text-xl font-semibold text-black">{chef.name}</h2>
        <p className="text-sm text-gray-600">{chef.title}</p>
        <p className="text-sm text-gray-500 mt-3 px-4">{chef.description}</p>
      </div>

      <div className="absolute top-3 py-3 bg-white transition-all duration-500 ease-in-out bg-opacity-30 -right-60 group-hover:right-2 w-[12%]">
        <div className="flex flex-col items-center justify-center gap-4">
          {icons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-white transition duration-200"
              //   aria-label={icon.id}
            >
              <div className="w-6 h-6 flex justify-center items-center rounded-full bg-gray-200 hover:bg-custom-color">
                {icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;

export const EventCard = ({ testimonial }) => {
  return (
    <div
      className="w-[100%] mx-auto h-[500px] group duration-500 transition-all ease-in-out"
      style={{
        position: "relative",
        backgroundImage: `url(${testimonial.gallery[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Image */}
      <div className="bg-black bg-opacity-60 flex flex-col justify-end gap-4 h-full">
        {/* Overlay */}

        {/* Content */}
        <div className=" bottom-0 p-6 text-white w-full group-hover:scale-105 duration-500 transition-all ease-in-out ">
          <Party text={testimonial.venue_name} />
          <div className=" flex flex-col justify-center">
            {" "}
            <p className="text-2xl font-bold my-1">{testimonial.pricing}</p>
            <span className="inline-block w-[63%] h-[2px] bg-custom-color rounded-lg"></span>
          </div>
          <p className="text-[16px] pt-3">{testimonial.description}</p>
        </div>
      </div>
    </div>
  );
};
