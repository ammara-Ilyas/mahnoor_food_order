"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderedMenu } from "@/store/slice/OrderSlice";
import { setIsMenuForm } from "@/store/slice/EventSlice";
export const TeaPackage = () => {
  const dispatch = useDispatch();
  const [teaMenu, setTeaMenu] = useState({
    tea: ["Tea", "Coffee"],
    snacks: [],
  });

  const [selectedTea, setSelectedTea] = useState("");
  const [selectedSnacks, setSelectedSnacks] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    if (menuList?.length > 0) {
      const snacks = menuList.find((item) => item.name === "Snacks");
      if (snacks && snacks.items) {
        setTeaMenu((prev) => ({ ...prev, snacks: snacks.items }));
      }
    }
  }, [menuList]);

  const handleTeaChange = (event) => {
    setSelectedTea(event.target.value);
  };

  const handleSnackChange = (event) => {
    const value = event.target.value;
    setSelectedSnacks((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value); // Remove if already selected
      } else if (prev.length < 2) {
        return [...prev, value]; // Allow max 2 selections
      }
      return prev;
    });
  };

  const handleProcced = (event) => {
    event.preventDefault(); // Prevent page refresh
    dispatch(
      setOrderedMenu({
        teaPackage: { tea: selectedTea, snacks: selectedSnacks },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex bg-gray-900/80 text-white flex-col rounded-2xl shadow-md w-[300px] md:w-[400px]">
      <h2 className="text-lg font-bold bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Tea Package Offer
      </h2>
      <form
        onSubmit={handleProcced}
        className="w-full flex flex-col items-start justify-start"
      >
        {/* <p className="font-semibold mx-20">Welcome Drink included!</p> */}
        <div className="p-8 ">
          {/* Tea/Coffee Radio Inputs */}
          <div>
            <h3 className="font-semibold">Select One</h3>
            {teaMenu.tea.map((item, index) => (
              <label
                key={index}
                style={{ display: "block", margin: "5px 0" }}
                className="inline"
              >
                <input
                  type="radio"
                  className="mx-3 w-[15px] h-[15px] rounded-md"
                  name="tea-package"
                  value={item}
                  checked={selectedTea === item}
                  onChange={handleTeaChange}
                />
                {item}
              </label>
            ))}
          </div>

          {/* Snacks Checkbox Inputs */}
          <div>
            <h3 className="font-semibold">Select Two Snacks</h3>
            {teaMenu.snacks.map((snack, index) => (
              <label key={index} style={{ display: "block", margin: "5px 0" }}>
                <input
                  type="checkbox"
                  className="mx-3 w-[15px] h-[15px] rounded-md"
                  value={snack.name}
                  checked={selectedSnacks.includes(snack.name)}
                  onChange={handleSnackChange}
                  disabled={
                    !selectedSnacks.includes(snack.name) &&
                    selectedSnacks.length >= 2
                  }
                />
                {snack.name}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export const NormalPackage = () => {
  const dispatch = useDispatch();
  const [packageMenu, setPackageMenu] = useState({
    snacks: [],
    biryaniAndRice: [],
    beverages: [],
  });

  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    if (menuList?.length > 0) {
      setPackageMenu({
        snacks: menuList.find((item) => item.name === "Snacks")?.items || [],
        biryaniAndRice:
          menuList.find((item) => item.name === "Biryani and Rice")?.items ||
          [],
        beverages:
          menuList.find((item) => item.name === "Beverages")?.items || [],
      });
    }
  }, [menuList]);

  const handleSnackChange = (event) => {
    const value = event.target.value;
    setSelectedSnacks((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value); // Remove if already selected
      } else if (prev.length < 3) {
        return [...prev, value]; // Allow max 3 selections
      }
      return prev;
    });
  };

  const handleBiryaniRiceChange = (event) => {
    setSelectedBiryaniRice(event.target.value);
  };

  const handleBeverageChange = (event) => {
    setSelectedBeverage(event.target.value);
  };

  const handleProceed = (event) => {
    event.preventDefault(); // Prevent form refresh
    dispatch(
      setOrderedMenu({
        normalPackage: {
          snacks: selectedSnacks,
          biryaniAndRice: selectedBiryaniRice,
          beverage: selectedBeverage,
        },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex bg-gray-900/80 text-white w-[300px] sm:w-[400px] md:w-[500px] flex-col rounded-2xl shadow-md items-center justify-center overflow-y-auto mt-28 ">
      <h2 className="text-lg font-bold bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Normal Package Offer
      </h2>
      <form onSubmit={handleProceed} className="p-8 w-full max-w-lg">
        <p className="mx-20 font-semibold">Welcome Drink included</p>

        {/* Snacks Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Three Snacks:</h3>
          {packageMenu.snacks.map((snack, index) => (
            <label key={index} className="block my-2">
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={snack.name}
                checked={selectedSnacks.includes(snack.name)}
                onChange={handleSnackChange}
                disabled={
                  !selectedSnacks.includes(snack.name) &&
                  selectedSnacks.length >= 3
                }
              />
              {snack.name}
            </label>
          ))}
        </div>

        {/* Biryani and Rice Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Biryani or Rice Option:</h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} className="block my-2">
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="biryani-rice"
                value={item.name}
                checked={selectedBiryaniRice === item.name}
                onChange={handleBiryaniRiceChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Beverage:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} className="block my-2">
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="beverages"
                value={item.name}
                checked={selectedBeverage === item.name}
                onChange={handleBeverageChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300 mt-4"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export const StandardPackage = () => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);
  const { orderedMenu } = useSelector((state) => state.order);

  console.log("Ordered Menu:", orderedMenu); // Debugging log

  const [packageMenu, setPackageMenu] = useState({
    bbq: [],
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    beverages: [],
  });

  const [selectedBBQ, setSelectedBBQ] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState("");
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");
  const [packagePrice, setPackagePrice] = useState(0);

  useEffect(() => {
    if (menuList.length) {
      const bbq = menuList.find((item) => item.name === "BBQ");
      const karahi = menuList.find((item) => item.name === "Karahi");
      const biryaniAndRice = menuList.find(
        (item) => item.name === "Biryani and Rice"
      );
      const desserts = menuList.find((item) => item.name === "Desserts");
      const beverages = menuList.find((item) => item.name === "Beverages");
      const packageDetails = menuList.find(
        (item) => item.name === "Standard Package"
      );

      setPackageMenu({
        bbq: bbq ? bbq.items : [],
        karahi: karahi ? karahi.items : [],
        biryaniAndRice: biryaniAndRice ? biryaniAndRice.items : [],
        desserts: desserts ? desserts.items : [],
        beverages: beverages ? beverages.items : [],
      });

      setPackagePrice(packageDetails?.price || 0);
    }
  }, [menuList]);

  // Handlers
  const handleBBQChange = (event) => {
    const value = event.target.value;
    setSelectedBBQ((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Remove if already selected
        : prev.length < 2
        ? [...prev, value] // Allow max 2 selections
        : prev
    );
  };

  const handleKarahiChange = (event) => setSelectedKarahi(event.target.value);
  const handleBiryaniRiceChange = (event) =>
    setSelectedBiryaniRice(event.target.value);
  const handleDessertChange = (event) => setSelectedDessert(event.target.value);
  const handleBeverageChange = (event) =>
    setSelectedBeverage(event.target.value);

  // Save Selection
  const handleProceed = () => {
    dispatch(
      setOrderedMenu({
        standardPackage: {
          selectedBBQ,
          selectedKarahi,
          selectedBiryaniRice,
          selectedDessert,
          selectedBeverage,
        },
      })
    );
    dispatch(setIsMenuForm("payment"));
  };

  return (
    <div className="flex bg-gray-900/80 text-white flex-col rounded-2xl shadow-md items-center justify-center overflow-y-auto mt-28 w-[300px] sm:w-[400px] md:w-[500px]">
      <h2 className="text-lg font-bold bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Standard Package Offer
      </h2>
      <div className="p-8 w-full max-w-lg">
        <p className="text-orange-600 font-semibold text-lg">
          Total Price: {packagePrice}
        </p>
        <p className="font-semibold">Additional Services: Basic Decor</p>

        {/* BBQ Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two BBQ Options:</h3>
          {packageMenu.bbq.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                value={item.name}
                checked={selectedBBQ.includes(item.name)}
                onChange={handleBBQChange}
                disabled={
                  !selectedBBQ.includes(item.name) && selectedBBQ.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Karahi Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Karahi Option:</h3>
          {packageMenu.karahi.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="karahi"
                value={item.name}
                checked={selectedKarahi === item.name}
                onChange={handleKarahiChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Biryani and Rice Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Biryani or Rice Option:</h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="biryani-rice"
                value={item.name}
                checked={selectedBiryaniRice === item.name}
                onChange={handleBiryaniRiceChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Dessert Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Dessert Option:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="desserts"
                value={item.name}
                checked={selectedDessert === item.name}
                onChange={handleDessertChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Beverage:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                className="mx-3 w-[15px] h-[15px] rounded-md"
                name="beverages"
                value={item.name}
                checked={selectedBeverage === item.name}
                onChange={handleBeverageChange}
              />
              {item.name}
            </label>
          ))}
        </div>
        <button
          onClick={handleProceed}
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-md mt-4 hover:bg-orange-700 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};
