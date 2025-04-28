import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderedMenu } from "@/store/slice/OrderSlice";
import { setIsMenuForm } from "@/store/slice/EventSlice";
export const CoupleCelebrationPackage = () => {
  const dispatch = useDispatch();

  const [packageMenu, setPackageMenu] = useState({
    bbq: [],
    karahi: [],
    desserts: [],
    beverages: [],
  });

  const [selectedBBQ, setSelectedBBQ] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState([]);
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    const getMenuItems = (category) => {
      const item = menuList.find((menuItem) => menuItem.name === category);
      return item ? item.items : [];
    };

    setPackageMenu({
      bbq: getMenuItems("BBQ"),
      karahi: getMenuItems("Karahi"),
      desserts: getMenuItems("Desserts"),
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

  const handleRadioChange = (event, stateUpdater) => {
    stateUpdater([event.target.value]);
  };

  const handleProceed = (event) => {
    event.preventDefault();

    dispatch(
      setOrderedMenu({
        coupleCelebrationPackage: {
          bbq: selectedBBQ[0] || "",
          karahi: selectedKarahi[0] || "",
          desserts: selectedDesserts[0] || "",
          beverages: selectedBeverages,
        },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex  bg-gray-900/80 text-white w-[300px] sm:w-[400px] md:w-[500px]  flex-col rounded-2xl shadow-md items-center justify-center overflow-y-autow-full">
      <h2 className="text-lg font-bold  mt-[400px]  bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        {" "}
        Couple Celebration Package Offer
      </h2>
      <form
        onSubmit={handleProceed}
        className=" p-8 rounded-2xl shadow-md w-full max-w-lg"
      >
        {/* Beverages Selection */}
        <p className="font-semibold mx-20">Welcom drink included!</p>
        <div>
          {/* Additional Services */}
          <div className="mt-4 ml-5 mb-2">
            <h3 className="font-semibold">Additional Services:</h3>
            <ul className="list-disc font-normal">
              <li>Romantic Decor</li>
            </ul>
          </div>
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

        {/* BBQ Selection (Radio - 1 Option) */}
        <div>
          <h3 className="font-semibold">Select One BBQ Option:</h3>
          {packageMenu.bbq.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="bbq"
                value={item.name}
                checked={selectedBBQ.includes(item.name)}
                onChange={(e) => handleRadioChange(e, setSelectedBBQ)}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Karahi Selection (Radio - 1 Option) */}
        <div>
          <h3 className="font-semibold">Select One Karahi Option:</h3>
          {packageMenu.karahi.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="karahi"
                value={item.name}
                checked={selectedKarahi.includes(item.name)}
                onChange={(e) => handleRadioChange(e, setSelectedKarahi)}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Selection (Radio - 1 Option) */}
        <div>
          <h3 className="font-semibold">Select One Dessert:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="desserts"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={(e) => handleRadioChange(e, setSelectedDesserts)}
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

export default CoupleCelebrationPackage;
