import React from "react";
import LoginForm from "@/components/auth/LoginForm";
const page = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center mb-52 lg:mb-0"
      style={{
        backgroundImage: "url('/images/bg.gif')",
      }}
    >
      <div className="relative   flex flex-col md:flex-row items-center  justify-evenly bg-gray-900  bg-opacity-50 min-h-screen text-white">
        <div className="w-[70%] md:w-[45%] lg:w-[30%] mx-auto h-[350px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
