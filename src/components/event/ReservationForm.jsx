"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  setTotalPrice,
  setIsBook,
  setIsMenuForm,
} from "@/store/slice/EventSlice";
import { toast } from "react-toastify";
// import CheckAvailability from "./CheckAvailability";

const ReservationForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isAvail, setIsAvail] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [standardPrice, setStandardPrice] = useState(0);
  const [outStandardPrice, setOutStandardPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [people, setPeople] = useState(0);
  const [withMenu, setWithMenu] = useState(null);
  const [price, setPrice] = useState(0);

  const { events } = useSelector((state) => state.menu);

  useEffect(() => {
    if (selectedEvent) {
      const selectedEventData = events.find(
        (event) => event.name === selectedEvent
      );
      if (selectedEventData) {
        setStandardPrice(selectedEventData.standardPrice);
        setOutStandardPrice(selectedEventData.outStandardPrice);
        setSelectedPrice(0);
        setPrice(0); // Reset total price when event changes
      }
    }
  }, [selectedEvent, events]);

  useEffect(() => {
    if (selectedPrice && people) {
      setPrice(selectedPrice * people);
    }
  }, [selectedPrice, people]);

  const handleProceed = () => {
    if (!selectedEvent || !selectedPrice || people <= 0) {
      toast.error("Please fill out all fields and select pricing.");
      return;
    }
    if (withMenu === null) {
      toast.error("Please select 'With Menu' or 'Without Menu'.");
      return;
    }
    let isLogin = localStorage.getItem("user");
    if (isLogin) {
      dispatch(setTotalPrice(price));

      if (withMenu) {
        dispatch(setIsMenuForm("menu"));
      } else {
        dispatch(setIsMenuForm("payment"));
      }
      dispatch(setIsBook(true));
    } else {
      router.push("/contact/login");
    }
  };

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="mb-10">
        <ul className="flex flex-row items-center text-black border-b-2 border-b-gray-400 font-semibold gap-5">
          <li
            onClick={() => setIsAvail(true)}
            className={`cursor-pointer ${
              isAvail ? "text-orange-600 border-b-2 border-orange-600" : ""
            }`}
          >
            Availability
          </li>
          <li
            onClick={() => setIsAvail(false)}
            className={`cursor-pointer ${
              !isAvail ? "text-orange-600 border-b-2 border-orange-600" : ""
            }`}
          >
            Reservation
          </li>
        </ul>
      </div>

      <div className="w-full">
        {isAvail ? (
          <CheckAvailability />
        ) : (
          <div className="border rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
              Reservation Summary
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First name"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 border rounded-md col-span-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md col-span-2"
              />
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="p-3 border rounded-md"
              >
                <option value="">Select Event</option>
                {events.map((event, i) => (
                  <option key={i} value={event.name}>
                    {event.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="People"
                value={people}
                onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
                className="p-3 border rounded-md"
              />
              <div className="flex flex-row items-center">
                <input
                  id="standard"
                  type="radio"
                  name="price"
                  checked={selectedPrice === standardPrice}
                  onChange={() => setSelectedPrice(standardPrice)}
                  className="w-4 h-4"
                />
                <label htmlFor="standard" className="ml-2 font-semibold">
                  Standard: ${standardPrice}
                </label>
              </div>
              <div className="flex flex-row items-center">
                <input
                  id="outStandard"
                  type="radio"
                  name="price"
                  checked={selectedPrice === outStandardPrice}
                  onChange={() => setSelectedPrice(outStandardPrice)}
                  className="w-4 h-4"
                />
                <label htmlFor="outStandard" className="ml-2 font-semibold">
                  OutStandard: ${outStandardPrice}
                </label>
              </div>
              <div className="border-b-2 border-gray-500 font-bold text-lg col-span-2">
                Total Price: ${price}
              </div>
              <div className="flex flex-row items-center">
                <input
                  id="withMenu"
                  type="radio"
                  name="menu"
                  checked={withMenu === true}
                  onChange={() => setWithMenu(true)}
                  className="w-4 h-4"
                />
                <label htmlFor="withMenu" className="ml-2 font-semibold">
                  With Menu
                </label>
              </div>
              <div className="flex flex-row items-center">
                <input
                  id="withoutMenu"
                  type="radio"
                  name="menu"
                  checked={withMenu === false}
                  onChange={() => setWithMenu(false)}
                  className="w-4 h-4"
                />
                <label htmlFor="withoutMenu" className="ml-2 font-semibold">
                  Without Menu
                </label>
              </div>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-orange-600 text-white font-medium py-3 rounded-md mt-4 hover:bg-orange-700 transition"
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationForm;

export function CheckAvailability() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState(null); // null: no check, true: available, false: unavailable
  const [suggestedDates, setSuggestedDates] = useState([]); // Alternative dates
  const [message, setMessage] = useState("");

  const handleCheckAvailability = async () => {
    if (!date || !startTime || !endTime) {
      setMessage("Please fill all fields");
      return;
    }

    setLoading(true);
    setMessage("");
    setAvailability(null);
    setSuggestedDates([]);

    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

      const isAvailable = Math.random() > 0.5; // Randomly determine availability (replace with real API logic)

      if (isAvailable) {
        setAvailability(true);
        setMessage("The selected date and time are available!");
      } else {
        setAvailability(false);
        setMessage("The selected date and time are unavailable.");

        // Generate 5 random alternative dates within the next 30 days
        const randomDates = generateRandomDates(5, date);
        setSuggestedDates(randomDates);
      }
    } catch (error) {
      console.error("Availability check error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to generate 5 random dates within the next 30 days
  const generateRandomDates = (count, baseDate) => {
    const base = new Date(baseDate);
    const randomDates = [];

    for (let i = 0; i < count; i++) {
      const randomDay = Math.floor(Math.random() * 30) + 1; // Random day within the next 30 days
      const newDate = new Date(base);
      newDate.setDate(base.getDate() + randomDay);
      randomDates.push(newDate.toISOString().split("T")[0]); // Format as YYYY-MM-DD
    }

    return randomDates;
  };

  const handleDateSelection = (newDate) => {
    setDate(newDate);
    setAvailability(true); // Assume the newly selected date is available
    setSuggestedDates([]);
    setMessage("You selected an alternative date.");
    console.log("date", newDate);
  };

  return (
    <div className="rounded-lg shadow-md border">
      <h2 className="text-lg font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
        Check Availability
      </h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orangeS-500 focus:border-orangeS-500"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-time" className="block text-gray-600 mb-2">
              Start Time
            </label>
            <input
              type="time"
              id="start-time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="end-time" className="block text-gray-600 mb-2">
              End Time
            </label>
            <input
              type="time"
              id="end-time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-600"
            />
          </div>
        </div>

        <button
          onClick={handleCheckAvailability}
          disabled={loading}
          className={`w-full flex justify-center items-center bg-orange-600 text-white py-2 px-4 rounded-md font-semibold ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
          }`}
        >
          {loading ? (
            <div className="w-5 h-5  border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Check Availability"
          )}
        </button>

        {/* Display messages */}
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              availability === true
                ? "text-green-500"
                : availability === false
                ? "text-red-500"
                : "text-gray-700"
            }`}
          >
            {message}
          </p>
        )}

        {/* Display alternative dates if unavailable */}
        {availability === false && suggestedDates.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-700 mb-2">
              Here are some alternative dates:
            </p>
            <ul className="flex flex-row flex-wrap gap-2">
              {suggestedDates.map((date) => (
                <li
                  key={date}
                  className="mb-2 text-white bg-orange-600 py-2 px-4 rounded-lg"
                >
                  <button
                    type="button"
                    onClick={() => handleDateSelection(date)}
                    className=""
                  >
                    {date}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
