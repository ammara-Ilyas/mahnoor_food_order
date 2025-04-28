import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderedMenu } from "@/store/slice/OrderSlice";
import { setIsMenuForm } from "@/store/slice/EventSlice";
export const LuxuryBanquetPackage = () => {
  const dispatch = useDispatch();

  const [packageMenu, setPackageMenu] = useState({
    bbq: [],
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    snacks: [],
    beverages: [],
  });

  const [selectedBBQ, setSelectedBBQ] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState([]);
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState([]);
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
      bbq: getMenuItems("BBQ"),
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
        luxuryBanquetPackage: {
          bbq: selectedBBQ,
          karahi: selectedKarahi,
          biryaniAndRice: selectedBiryaniRice,
          desserts: selectedDesserts,
          snacks: selectedSnacks,
          beverages: selectedBeverages,
        },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex  bg-gray-900/80 text-white w-[300px] sm:w-[400px] md:w-[500px]  flex-col rounded-2xl shadow-md items-center justify-center overflow-y-auto ">
      <h2 className="text-lg font-bold  mt-[680px]  bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Luxury Banquet Package Offer
      </h2>
      <form
        onSubmit={handleProceed}
        className=" p-8 rounded-2xl bg-transparent shadow-md w-full max-w-lg"
      >
        {/* BBQ Selection */}
        <div>
          <p className="font-semibold mx-20">Wlecome Drink included!</p>
          <h3 className="font-semibold">Select Four BBQ Options:</h3>
          {packageMenu.bbq.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBBQ.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedBBQ, 4)}
                disabled={
                  !selectedBBQ.includes(item.name) && selectedBBQ.length >= 4
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Karahi Selection */}
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
          <h3 className="font-semibold">Select Two Biryani or Rice Options:</h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBiryaniRice.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBiryaniRice, 2)
                }
                disabled={
                  !selectedBiryaniRice.includes(item.name) &&
                  selectedBiryaniRice.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Selection */}
        <div>
          <h3 className="font-semibold">Select Three Desserts:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedDesserts, 3)
                }
                disabled={
                  !selectedDesserts.includes(item.name) &&
                  selectedDesserts.length >= 3
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Snacks Selection */}
        <div>
          <h3 className="font-semibold">Select Two Snacks:</h3>
          {packageMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedSnacks, 2)}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Selection */}
        <div>
          <h3 className="font-semibold">Select Three Beverages:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBeverages.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBeverages, 3)
                }
                disabled={
                  !selectedBeverages.includes(item.name) &&
                  selectedBeverages.length >= 3
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

export default LuxuryBanquetPackage;
