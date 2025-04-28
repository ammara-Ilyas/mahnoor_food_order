"use client";
import React, { useState, useEffect } from "react";
import ReservationForm, {
  CheckAvailability,
  QuoteForm,
} from "./ReservationForm";
import HeroSection from "../miniWidgets/HeroSection";
import SingleEventCard from "./SingleEventCard";
import { HeadingText } from "../miniWidgets/Heading";
import CircularProgress from "@mui/material/CircularProgress";
import SingleEventDes from "./SingleEventDes";
import SingleEventSlider from "./SingleEventSlider";
import Ratings, { FeedbackForm, ReviewList } from "./RatingOverview";
import Gallery from "./EventImageGallery";
import { useSelector } from "react-redux";
const SingleEvent = ({ id }) => {
  const [eventById, setEventById] = useState(null);
  const { events = [] } = useSelector((state) => state.event);

  // console.log("events in single event", events, "and Id", id);

  useEffect(() => {
    const foundEvent = events.find((event) => event.id == id);
    console.log("event by id", foundEvent);
    setEventById(foundEvent);
  }, [id, events]);

  if (!eventById) return <CircularProgress className="m-24" />;

  return (
    <div>
      <HeroSection text={eventById.name} img={eventById.gallery[0]} />

      <HeadingText heading={eventById.venue_name} text={eventById.name} />

      <div
        className="flex justify-center
     gap-5"
      >
        <div className="  w-[65%] ml-10 ">
          <SingleEventDes detail={eventById.detail} tags={eventById.tags} />
          <Gallery images={eventById.gallery} />
          <PartyMenuDisplay />
          <Ratings />
        </div>
        <div className=" w-[40%] ">
          <ReservationForm />
        </div>
      </div>
      <div>
        <ReviewList reviews={eventById.reviews} />
        <FeedbackForm />
      </div>
    </div>
  );
};

export default SingleEvent;

export const PartyMenuDisplay = () => {
  const [partyMenu, setPartyMenu] = useState([]);
  const [partyMenuName, setPartyMenuName] = useState("");
  const [partyMenuItems, setPartyMenuItems] = useState([]);
  const [partyMenuPrice, setPartyMenuPrice] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menupackage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data in menuform", data.packages);

        setPartyMenu(data.packages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleMenu = (menu) => {
    setPartyMenuPrice(menu.price);
    setPartyMenuItems(menu.includes);
    setPartyMenuName(menu.name);
  };
  return (
    <div>
      <div className="my-5 shadow-md rounded-lg" id="menu">
        <h2 className="text-lg font-bold bg-orange-600 mb-4 text-white py-2 px-4 rounded-t-lg">
          Menu display
        </h2>
        <ul className="flex flex-row  rounded-md flex-wrap gap-2 px-5">
          {partyMenu &&
            partyMenu.map((menu, i) => (
              <li
                key={i}
                className={`${
                  partyMenuName == menu.name
                    ? "text-orange-600 underline"
                    : "text-black "
                }  mb-2   py-1 px-2 rounded-lg`}
              >
                <button
                  type="button"
                  onClick={() => handleMenu(menu)}
                  className=""
                >
                  {menu.name}
                </button>
              </li>
            ))}
        </ul>
        <div className="p-5 px-7">
          {/* <p className="font-semibold text-lg">Pacage: {partyMenuName} </p> */}
          <p className="font-semibold text-lg">Price: {partyMenuPrice} </p>
          {partyMenuItems &&
            partyMenuItems.map((item, i) => (
              <div key={i} className="">
                <p className="border-b border-gray-400 my-1 inline-block pr-3">
                  {item}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
