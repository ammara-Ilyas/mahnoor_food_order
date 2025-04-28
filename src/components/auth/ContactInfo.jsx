import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactDetails = [
  {
    id: 1,
    title: "Address",
    description: "A108 Adam Street, New York, NY 535022",
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 2,
    title: "Call Us",
    description: "+1 5589 55488 55",
    icon: <FaPhoneAlt />,
  },
  {
    id: 3,
    title: "Email Us",
    description: "info@example.com",
    icon: <FaEnvelope />,
  },
  {
    id: 4,
    title: "Opening Hours",
    description: (
      <>
        <span className="font-medium">Mon-Sat:</span> 11AM - 23PM;{" "}
        <span className="font-medium">Sunday:</span> Closed
      </>
    ),
    icon: <FaClock />,
  },
];

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 c w-[85%] mx-auto gap-6 py-6">
      {contactDetails.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow"
        >
          <div className="bg-orange-500 text-white p-3 rounded-full">
            <div className="w-6 h-6  text-2xl">{item.icon}</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
