"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NEXT_PUBLIC_BASE_URL = "https://restweb.azurewebsites.net/";
const LoginForm = () => {
  const router = useRouter();
  // State for form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload on submit
    setIsLoading(true); // Show loading state

    // Validate email and password
    if (!loginData.email || !loginData.password) {
      toast.error("Email and password are required.", {
        position: "top-right",
      });
      setIsLoading(false); // Stop loading
      return;
    }

    try {
      // Send POST request using fetch
      const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
      console.log("response", response);

      // Check if the response is OK
      if (response.ok) {
        const user = await response.json(); // Parse JSON response

        localStorage.setItem("token", JSON.stringify(user.user_id));
        console.log("response user", user);

        toast.success(`${user.message}! 🎉`, {
          position: "top-right",
        });

        // Reset form fields
        setLoginData({
          email: "",
          password: "",
        });

        // Navigate to the home page
        router.push("/");
      } else {
        // Handle errors (e.g., 400 Bad Request)
        const errorData = await response.json();
        console.log("error bad ", errorData);

        toast.error(errorData.detail || "Invalid email or password.", {
          position: "top-right",
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Network error:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false); // Stop loading
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
      className="p-6 w-full max-w-md bg-gray-800/50  h-full shadow-md rounded-md py-5"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      {" "}
      <h1 className="text-2xl font-bold text-center text-orange-600">Login</h1>
      <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
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
            value={loginData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <p className="text-end pt-2 px-2">
            Don't have account{" "}
            <Link
              href="/contact/register"
              className="underline text-orange-600 italic"
            >
              Register
            </Link>{" "}
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
            <div className="animate-spin h-5 w-5 border-2 border-t-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
