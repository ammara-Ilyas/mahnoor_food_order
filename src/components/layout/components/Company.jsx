import React from "react";
import Link from "next/link";
const Company = () => {
  return (
    <div>
      {/* Company */}
      <div>
        <h4 className="text-lg text-orange-400 font-semibold mb-4">
          Yummy Yatch
        </h4>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="hover:text-white">
              Reservation
            </Link>
          </li>
          <li>
            <Link href="/contact/login" className="hover:text-white">
              Login
            </Link>
          </li>
          <li>
            <Link href="/contact/register" className="hover:text-white">
              Resgistration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
