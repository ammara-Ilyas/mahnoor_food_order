"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotalPrice } from "@/store/slice/EventSlice";
import MenuPackageForm from "./MenuPackageForm";

export const MenuForm = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.event);

  const [selectedParty, setSelectedParty] = useState(null);
  const [menuOptions, setMenuOptions] = useState([]);
  const [isMenu, setisMenu] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menupackage.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("data in menuform", data.packages);

        setMenuOptions(data.packages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelection = (event) => {
    const selectedPackage = menuOptions.find(
      (pkg) => pkg.name === event.target.value
    );
    setSelectedParty(selectedPackage);
  };

  const handleProceed = () => {
    if (!selectedParty || !selectedParty.price) {
      console.error("No party selected or missing price");
      return;
    }
    dispatch(setTotalPrice(selectedParty.price * (totalPrice || 1)));
    console.log("total price in menu form", totalPrice);

    setisMenu(false);
  };

  return (
    <>
      {isMenu ? (
        <div className="bg-gray-800/90  text-white  rounded-2xl shadow-md w-full max-w-lg">
          <h1 className="text-lg text-center font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
            Select Menu Package
          </h1>
          <div className="p-8">
            {menuOptions.length > 0 ? (
              menuOptions.map((party, index) => (
                <div key={index} className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="party"
                      value={party.name}
                      checked={selectedParty?.name === party.name}
                      onChange={handleSelection}
                      className="mr-3 h-5 w-5 text-white focus:ring-orange-500"
                    />
                    <span className=" text-lg">{party.name}</span>
                    <span className="text-gray-100 text-lg ml-10">
                      {party.price}$
                    </span>
                  </label>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Loading options...</p>
            )}
            <button
              onClick={handleProceed}
              className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
              disabled={!selectedParty}
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div className=" ">
          <SelectedMenu selectedParty={selectedParty} setisMenu={setisMenu} />
        </div>
      )}
    </>
  );
};

export const SelectedMenu = ({ selectedParty, setisMenu }) => {
  console.log("selected party in selected menu", selectedParty);

  return (
    <>
      {selectedParty && (
        <div className="">
          <div className="w-full flex items-center justify-center   ">
            <MenuPackageForm selectedPackage={selectedParty.name} />
          </div>
          <div className="flex flex-row items-center justify-between">
            {/* Submit Button */}
            <button
              onClick={() => setisMenu(true)}
              className="w-full  bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Previous
            </button>{" "}
          </div>
        </div>
      )}
    </>
  );
};
