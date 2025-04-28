"use client";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, cancelOrder } from "@/store/slice/VenuOrderSlice";
import { useState } from "react";
import { HeadingText } from "../miniWidgets/Heading";

const VenueOrders = () => {
  const dispatch = useDispatch();
  const venueOrders = useSelector(
    (state) => state.venueOrder.venueOrders || []
  );
  const [cancelOrderState, setCancelOrderState] = useState(null);

  const handleCancel = (order) => {
    if (order.status === "PENDING") {
      setCancelOrderState(order);
    }
  };

  const confirmCancel = () => {
    dispatch(cancelOrder(cancelOrderState.id));
    setCancelOrderState(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <HeadingText heading="Your Venue Bookings" text="Venues" />

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-orange-600 text-white text-left">
              <th className="p-2 sm:p-3">Order ID</th>
              <th className="p-2 sm:p-3">Venue</th>
              <th className="p-2 sm:p-3 hidden md:table-cell">Address</th>
              <th className="p-2 sm:p-3">Date</th>
              <th className="p-2 sm:p-3">Price</th>
              <th className="p-2 sm:p-3">Status</th>
              <th className="p-2 sm:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {venueOrders.map((order) => (
              <tr key={order.id} className="border-t border-gray-300">
                <td className="p-2 sm:p-3">{order.id}</td>
                <td className="p-2 sm:p-3">{order.venue}</td>
                <td className="p-2 sm:p-3 hidden md:table-cell">
                  {order.address}
                </td>
                <td className="p-2 sm:p-3">{order.date}</td>
                <td className="p-2 sm:p-3">${order.price.toFixed(2)}</td>
                <td className="p-2 sm:p-3 text-orange-500 font-bold">
                  {order.status}
                </td>
                <td className="p-2 sm:p-3">
                  <button
                    onClick={() => handleCancel(order)}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm ${
                      order.status !== "PENDING"
                        ? "bg-gray-400 opacity-50 cursor-not-allowed"
                        : "bg-orange-600 text-white"
                    }`}
                    disabled={order.status !== "PENDING"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cancelOrderState && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
            <h2 className="text-lg font-semibold mb-2 sm:mb-4">Cancel Order</h2>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">
              If you cancel this order, 50% of the total price will be deducted.
            </p>
            <p className="font-bold text-sm sm:text-base">
              Refund Amount: ${(cancelOrderState.price * 0.5).toFixed(2)}
            </p>
            <div className="mt-3 sm:mt-4 flex justify-end space-x-2 sm:space-x-3">
              <button
                onClick={() => setCancelOrderState(null)}
                className="bg-gray-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm"
              >
                Keep Order
              </button>
              <button
                onClick={confirmCancel}
                className="bg-orange-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueOrders;
