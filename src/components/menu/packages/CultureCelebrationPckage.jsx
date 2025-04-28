import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderedMenu } from "@/store/slice/OrderSlice";
import { setIsMenuForm } from "@/store/slice/EventSlice";
export const CulturalCelebrationPackage = () => {
  const dispatch = useDispatch();

  const [packageMenu, setPackageMenu] = useState({
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    snacks: [],
    beverages: [],
  });

  const [selectedKarahi, setSelectedKarahi] = useState([]);
  const [selectedBiryaniAndRice, setSelectedBiryaniAndRice] = useState([]);
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    const getMenuItems = (category) => {
      const item = menuList.find((menuItem) => menuItem.name === category);
      return item ? item.items : [];
    };

    setPackageMenu({
      karahi: getMenuItems("Karahi"),
      biryaniAndRice: getMenuItems("Biryani and Rice"),
      desserts: getMenuItems("Desserts"),
      snacks: getMenuItems("Snacks"),
      beverages: getMenuItems("Beverages"),
    });
  }, [menuList]);

  const handleCheckboxChange = (event, stateUpdater, maxSelection) => {
    const value = event.target.value;
    stateUpdater((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else if (prev.length < maxSelection) {
        return [...prev, value];
      }
      return prev;
    });
  };

  const handleProceed = (event) => {
    event.preventDefault();

    dispatch(
      setOrderedMenu({
        culturalCelebrationPackage: {
          karahi: selectedKarahi,
          biryaniAndRice: selectedBiryaniAndRice,
          desserts: selectedDesserts[0] || "",
          snacks: selectedSnacks,
          beverages: selectedBeverages,
        },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex  bg-gray-900/80 text-white w-[300px] sm:w-[400px] md:w-[500px]  flex-col rounded-2xl shadow-md items-center justify-center overflow-y-autow-full">
      <h2 className="text-lg font-bold  mt-[580px]  bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Cultural Celebration Package Offer
      </h2>
      <form
        onSubmit={handleProceed}
        className="p-8 rounded-2xl shadow-md w-full max-w-lg"
      >
        {/* Karahi Selection */}
        <p className="font-semibold mx-20">Welcome drink included!</p>
        {/* Additional Services */}
        <div>
          <h3 className="font-semibold">Additional Services:</h3>
          <ul className="list-disc ml-5">
            <li>Traditional Decor</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Select Two Karahi Options:</h3>
          {packageMenu.karahi.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedKarahi.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedKarahi, 2)}
                disabled={
                  !selectedKarahi.includes(item.name) &&
                  selectedKarahi.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Biryani & Rice Selection */}
        <div>
          <h3 className="font-semibold">
            Select Two Biryani and Rice Options:
          </h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBiryaniAndRice.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBiryaniAndRice, 2)
                }
                disabled={
                  !selectedBiryaniAndRice.includes(item.name) &&
                  selectedBiryaniAndRice.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Selection */}
        <div>
          <h3 className="font-semibold">Select One Dessert:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedDesserts, 1)
                }
                disabled={
                  !selectedDesserts.includes(item.name) &&
                  selectedDesserts.length >= 1
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Snacks Selection */}
        <div>
          <h3 className="font-semibold">Select Three Snacks:</h3>
          {packageMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedSnacks, 3)}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 3
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Selection */}
        <div>
          <h3 className="font-semibold">Select Two Beverages:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBeverages.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBeverages, 2)
                }
                disabled={
                  !selectedBeverages.includes(item.name) &&
                  selectedBeverages.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-md mt-4 hover:bg-orange-700 transition"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default CulturalCelebrationPackage;
