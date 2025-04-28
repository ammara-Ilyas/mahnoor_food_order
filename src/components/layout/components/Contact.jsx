import React from "react";

const Contact = () => {
  return (
    <div>
      <h4 className="text-lg text-orange-400 font-semibold mb-4">Contact</h4>
      <ul className="space-y-2">
        <li className="flex items-center">📍 123 Street, New York, USA</li>
        <li className="flex items-center">📞 +012 345 67890</li>
        <li className="flex items-center">✉️ info@example.com</li>
        <li className="flex space-x-4 mt-4">
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
