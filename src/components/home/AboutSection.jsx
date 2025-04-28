import Heading from "../miniWidgets/Heading";
import { PiForkKnifeFill } from "react-icons/pi";
import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <div className="flex flex-col px-4   w-[100%] sm:w-[90%]   items-center xl:mr-10 sm:mr-5 mr-0 font-serif letter-wide justify-between ">
      <div className="flex-1">
        <div className="flex items-center justify-normal ">
          <div className="w-auto">
            {" "}
            <Heading text="About Us" />
          </div>{" "}
          <span className="h-[2px] w-[15%] border-[1px] rounded-md border-orange-600"></span>{" "}
        </div>

        <h1 className="flex flex-col sm:flex-row w-full flex-auto sm:items-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-4">
          Welcome to
          <span>
            <span className=" text-orange-600 ">
              {" "}
              <PiForkKnifeFill className="inline text-5xl" />
            </span>{" "}
            YumYatch
          </span>
        </h1>
        <p className="text-gray-500 mb-4 w-[100%]">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="text-gray-500 mb-6 w-[100%]">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="flex gap-2 sm:gap-8 font-mono w-[100%]">
          <div className="flex flex-row items-center justify-between px-5  sm:w-[44%] border-l-[6px] py-0  border-orange-600">
            <CountUp
              end={50}
              className="text-primary text-3xl sm:text-5xl font-bold text-orange-600"
            />
            <p className="text-gray-500 flex flex-col font-sans letter-wide">
              Years of{" "}
              <span className="font-semibold text-black"> Experience</span>
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-5  sm:w-[47%] border-l-[6px] py-0  border-orange-600">
            <CountUp
              end={50}
              className="text-primary text-3xl
               sm:text-5xl font-bold text-orange-600"
            />{" "}
            <p className="text-gray-500 flex flex-col font-sans letter-wide">
              Popular{" "}
              <span className="font-semibold text-black">Master Chefs</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
