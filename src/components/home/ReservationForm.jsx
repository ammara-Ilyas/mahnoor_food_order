"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../miniWidgets/Heading";
import VideoPopup from "../miniWidgets/Video";
import BookingForm from "../miniWidgets/BookingForm";
const ReservationForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-gray-50 py-16 " id="booking">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8  items-center">
          {/* Left Section: Image with Play Button */}
          <VideoPopup />
          {/* Right Section: Form */}
          <div
            className="bg-[#0b132a] text-white shadow-lg p-8"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="flex items-center ">
              <div className="w-auto">
                {" "}
                <Heading text="Reservation" />
              </div>{" "}
              <span className="h-[2px] w-[7%] items-center border-[1px] rounded-md border-orange-500"></span>{" "}
            </div>

            <h3 className="text-3xl font-bold mb-6 font-sans letter-wide">
              Book A Table Online
            </h3>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
