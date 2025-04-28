import React, { useEffect, useState } from "react";
import OutstandingPackage from "./packages/OutstandardPackage";
import FamilyFeastPackage from "./packages/FamilyFeastPackage";
import { useSelector } from "react-redux";
import {
  TeaPackage,
  NormalPackage,
  StandardPackage,
} from "./packages/Packages";
import CorporateEventPackage from "./packages/CooperatePackage";
import LuxuryBanquetPackage from "./packages/LuxuryPackage";
import KidsPartyPackage from "./packages/KidsPartyPackage";
import CulturalCelebrationPackage from "./packages/CultureCelebrationPckage";
import CoupleCelebrationPackage from "./packages/CoupleCelebrationPackage";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { setIsBook } from "@/store/slice/EventSlice";
import { useDispatch } from "react-redux";
// Map each package name to its corresponding component
const packageComponents = {
  "Tea Package": TeaPackage,
  "Normal Package": NormalPackage,
  "Standard Package": StandardPackage,
  "Outstanding Package": OutstandingPackage,
  "Family Feast Package": FamilyFeastPackage,
  "Corporate Event Package": CorporateEventPackage,
  "Luxury Banquet Package": LuxuryBanquetPackage,
  "Kids Party Package": KidsPartyPackage,
  "Cultural Celebration Package": CulturalCelebrationPackage,
  "Couple Celebration Package": CoupleCelebrationPackage,
};

const MenuPackageForm = ({ selectedPackage }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelection = (packageName, selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [packageName]: selectedOption,
    }));
  };

  // Find the selected package component
  const SelectedPackageComponent = packageComponents[selectedPackage];

  return (
    <div className="menu-package-form mt-32 bg-opacity-0 text-white  py-10 ">
      {/* Render the selected package only */}
      {SelectedPackageComponent ? (
        <SelectedPackageComponent
          selected={selectedOptions[selectedPackage]}
          onSelection={(option) => handleSelection(selectedPackage, option)}
        />
      ) : (
        <p className=" text-center">No package found for the selected party.</p>
      )}
    </div>
  );
};

export default MenuPackageForm;

export const PaymentForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { totalPrice, IsMenuForm, isBook } = useSelector(
    (state) => state.event
  );
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(Math.round((totalPrice * 20) / 100));
  }, [totalPrice]);

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success("Payment successful");
    const newOrder = {
      id: `INV${Math.floor(Math.random() * 1000)}`,
      venue: "New Venue",
      address: "New Address, NSW",
      date: "Monday, 19 Feb 2025",
      price: 20.5,
    };
    dispatch(addOrder(newOrder));

    dispatch(setIsBook(false));
    router.push("/order");
  };

  return (
    <div className="w-full flex items-center justify-center overflow-y-auto ">
      <div className="bg-gray-800  text-white  rounded-lg  mt-36 w-full max-w-md">
        <h2 className="text-lg font-bold bg-orange-600 bg-opacity-95 text-center text-white py-2 px-4 rounded-t-lg">
          Pay Invoice
        </h2>
        {/* Header */}

        {/* Card logos */}
        <div className="flex space-x-2 mb-4 p-6">
          <img src="/images/visa.jpeg" alt="Visa" className="w-12" />
          <img src="/images/master.jpeg" alt="MasterCard" className="w-12" />
          <img src="/images/amex.png" alt="American Express" className="w-12" />
          <img src="/images/discover.jpeg" alt="Discover" className="w-12" />
        </div>

        {/* Payment amount */}
        <div className="mb-4  p-6">
          <div className="flex justify-between mx-10 items-center ">
            <h4 className="text-2xl font-semibold">Total Payment</h4>
            <p className=" text-xl font-bold mt-1">${Math.round(totalPrice)}</p>
          </div>
          <div className="flex justify-between mx-10 items-center ">
            <h4 className="text-2xl font-semibold">
              20% Pay out of {Math.round(totalPrice)}
            </h4>
            <p className=" text-xl font-bold mt-1">${amount}</p>
          </div>
        </div>

        {/* Payment form */}
        <form className=" p-6" onSubmit={handleCheckout}>
          {/* Name on card */}
          <div className="mb-4 ">
            <label className="block text-sm font-medium  mb-1">
              Name on card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 text-black border  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border text-black-orange-500"
            />
          </div>

          {/* Card number */}
          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">
              Card number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border text-black-orange-500"
            />
          </div>

          {/* Expiry date and security code */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium  mb-1">
                Expiry date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border text-black-orange-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium  mb-1">
                Security code
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border text-black-orange-500"
              />
            </div>
          </div>

          {/* ZIP/Postal code */}
          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">
              ZIP/Postal code
            </label>
            <input
              type="text"
              placeholder="12345"
              className="w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border text-black-orange-500"
            />
          </div>

          {/* Pay button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};
