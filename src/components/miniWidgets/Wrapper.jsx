"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../miniWidgets/Heading";
import BookingForm from "./BookingForm";
import { useSelector, useDispatch } from "react-redux";
import { MenuForm } from "../menu/MenuForm";
import { PaymentForm } from "../menu/MenuPackageForm";
import { setTotalPrice } from "@/store/slice/EventSlice";
import { setIsBook } from "@/store/slice/EventSlice";
import {
  setLoading,
  setMenuList,
  setFilteredMenuList,
  setEvents,
} from "@/store/slice/MenuSlice";
const Booking = () => {
  const dispatch = useDispatch();
  const { totalPrice, IsMenuForm, isBook } = useSelector(
    (state) => state.event
  );
  const { menuList, filteredMenuList, category, loading, events } = useSelector(
    (state) => state.menu
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/data/menu.json");
  //       const data = await response.json();
  //       dispatch(setMenuList(data.categories));
  //       dispatch(setFilteredMenuList(data.categories));
  //       const eventResponse = await fetch("/data/events.json");
  //       const events = await eventResponse.json();
  //       dispatch(setEvents(events.events));
  //       localStorage.setItem("events", JSON.stringify(events.events)); // Correctly serialize and store
  //       localStorage.setItem("menu", JSON.stringify(data.categories));
  //       console.log("event list in wrappers", events);
  //       console.log("menu list in wrappers", menuList);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     dispatch(setLoading(false));
  //   };
  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <>
      {isBook && (
        <div
          className="fixed top-0 left-0 bg-gray-800/70 mx-auto max-h-full py-7 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-auto h-screen w-full flex items-center justify-center z-50"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={() => dispatch(setIsBook(false))}
          >
            &times;
          </button>
          {/* Slider component */}
          {/* <div
            className="w-[40%] bg-gray-800/50 mx-auto max-h-full py-7 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-auto flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay={300}
          > */}
          {IsMenuForm == "payment" ? <PaymentForm /> : <MenuForm />}
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default Booking;
