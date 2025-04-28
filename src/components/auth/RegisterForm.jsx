"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";
const RegisterForm = () => {
  const router = useRouter();
  const NEXT_PUBLIC_BASE_URL = "https://restweb.azurewebsites.net/";

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password mismatch validation
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
      });
      return;
    }

    console.log("register data", registerData);

    setIsLoading(true);
    try {
      const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/users/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerData.email,
          username: registerData.name,
          password: registerData.password,
        }),
      });

      if (response.ok) {
        const user = await response.json();

        // Store token in localStorage
        localStorage.setItem("token", JSON.stringify(user.user_id));

        toast.success(`${user.message}! 🎉`, {
          position: "top-right",
        });

        // Reset form fields
        setRegisterData({
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        });

        // Navigate to the login page (if needed)
        router.push("/contact/login");
      } else {
        // Handle errors (e.g., 400 Bad Request)
        const errorData = await response.json();
        console.log("error data", errorData);

        toast.error(
          errorData.detail || "Registration failed. Please try again.",
          {
            position: "top-right",
          }
        );
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Network error:", error);

      toast.error("Network error. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div
      className="p-6 w-full max-w-md bg-gray-800 shadow-md rounded-md"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      <h1 className="text-2xl font-bold text-center text-orange-600">
        Register
      </h1>
      {/* <ToastContainer /> */}

      <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={registerData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <p className="text-end pt-2 px-2">
            Already have account{" "}
            <Link
              href="/contact/login"
              className="underline text-orange-600 italic"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 flex justify-center items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            // Circular Progress Icon (Spinner)
            <div className="animate-spin h-5 w-5 border-2 border-t-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
