import Heading from "../miniWidgets/Heading";
import {
  FaPizzaSlice,
  FaUtensils,
  FaClipboardList,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export default function DashboardOverview() {
  return (
    <div className="p-8 rounded-lg shadow-lg bg-white border border-blue-200">
      <Heading text="Dashboard Overview" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300 text-orange-400">
          <FaClipboardList className="text-orange-400 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-gray-700 text-xl">
            Daily: 20 | Weekly: 140 | Monthly: 600
          </p>
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div className="bg-orange-600 h-2 rounded-full w-3/4"></div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <FaPizzaSlice className="text-4xl mb-4 mx-auto" />
          <h3 className="text-green-600 text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-gray-700 text-xl">$12,000 (Monthly)</p>
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div className="bg-green-600 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <FaUtensils className="text-yellow-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-yellow-600 text-lg font-semibold mb-2">
            Pending Orders
          </h3>
          <p className="text-gray-700 text-xl">35 Orders</p>
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div className="bg-yellow-600 h-2 rounded-full w-1/2"></div>
          </div>
        </div>

        {/* Customer Count */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-red-600 text-lg font-semibold mb-2">
            Customer Count
          </h3>
          <p className="text-gray-700 text-xl">120 Active</p>
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div className="bg-red-600 h-2 rounded-full w-3/5"></div>
          </div>
        </div>

        {/* Table Reservations */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <FaCalendarAlt className="text-purple-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-purple-600 text-lg font-semibold mb-2">
            Table Reservations
          </h3>
          <p className="text-gray-700 text-xl">15 Booked | 5 Available</p>
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
