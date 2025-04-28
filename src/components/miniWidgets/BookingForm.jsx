"use client";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  setTotalPrice,
  setIsMenuForm,
  setIsBook,
} from "@/store/slice/EventSlice";

const BookingForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pricePerPerson = 30; // Fixed price per person

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "1",
    date: "",
    time: "",
    specialRequest: "",
  });

  const [totalPrice, setTotalPriceState] = useState(0); // Initialize total price to zero
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "people") {
      const peopleCount = parseInt(value, 10) || 0;
      setTotalPriceState(peopleCount * pricePerPerson);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isLogin = localStorage.getItem("user");

    if (isLogin) {
      if (!formData.phone) {
        toast.error("Phone number is required!");
        return;
      }
      if (formData.phone.length < 10) {
        toast.error("Phone number must be at least 10 digits!");
        return;
      }

      setLoading(true);
      try {
        console.log("Booking form data:", formData);

        toast.success("Booking submitted successfully!");

        dispatch(setTotalPrice(totalPrice));
        dispatch(setIsMenuForm("payment"));
        dispatch(setIsBook(true));
        setFormData({
          name: "",
          email: "",
          phone: "",
          people: "1",
          date: "",
          time: "",
          specialRequest: "",
        });

        setTotalPriceState(0); // Reset total price to zero
      } catch (error) {
        toast.error("Error submitting booking. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      router.push("/contact/login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>

        {/* Phone & Number of People */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Your Phone Number"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            name="people"
            type="number"
            min="1"
            value={formData.people}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>

        {/* Price Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <p className="border-2 p-3 rounded bg-white text-gray-800 font-semibold">
            30$ / Person
          </p>
          <p className="border-2 p-3 rounded bg-white text-gray-800 font-semibold">
            Total Price: ${totalPrice}
          </p>
        </div>

        {/* Special Request */}
        <textarea
          rows="4"
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          placeholder="Special Request"
          className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600 mb-4"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 flex justify-center items-center"
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            `BOOK NOW`
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
