"use client";
import Image from "next/image";
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/Feature";
import About from "@/components/home/About";
import ChefsCard from "@/components/home/Chef";
import ReservationForm from "@/components/home/ReservationForm";
import TestimonialSlider from "@/components/home/Testimonial";
import EventSlider from "@/components/home/Event";
// import CatSlider from "@/components/miniWidgets/Slider";
import Wrapper from "@/components/miniWidgets/Wrapper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setMenuList,
  setFilteredMenuList,
  setLoading,
  setEvents,
} from "@/store/slice/MenuSlice";
export default function Home() {
  const dispatch = useDispatch();
  const { menuList, filteredMenuList, category, loading, isBook, events } =
    useSelector((state) => state.menu);
  console.log("menu", menuList);

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
  //       console.log("event list", events);
  //       console.log("menu list", menuList);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     dispatch(setLoading(false));
  //   };
  //   fetchData();
  // }, [dispatch]);
  // console.log("events", events);

  return (
    <>
      <Hero />
      <About />
      <FeatureCards />
      {/* <Menu /> */}
      <EventSlider />
      <ChefsCard />
      <ReservationForm />
      <TestimonialSlider />
    </>
  );
}
// "use client";

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("after fetch starting....");

//         const data = await fetch("https://restweb.azurewebsites.net/"); // Calls the proxy
//         const res = await data.json();
//         setData(res);
//         console.log("res data in home 4", res);
//         const services = await fetch(
//           "https://restweb.azurewebsites.net/admin/admin/get-all-services/'"
//         ); // Calls the proxy
//         const ser = await services.json();
//         console.log("services data in home 4", ser);
//       } catch (error) {
//         console.log("after fetch errror 1", error);

//         // console.error(error);
//       }
//     };
//     fetchData();
//     console.log("after fetch data 2", data);
//   }, []);
//   console.log("data in home 3", data);

//   return (
//     <div>
//       <h1>API Proxy Test</h1>
//       <pre>hello</pre>
//     </div>
//   );
// }
