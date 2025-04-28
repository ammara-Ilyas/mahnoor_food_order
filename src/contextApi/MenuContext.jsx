// "use client";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setMenuList,
//   setLoading,
//   setFilteredMenuList,
//   setEvents,
// } from "@/store/slice/MenuSlice";

// const MenuProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const { menuList, filteredMenuList, category, loading, isBook, events } =
//     useSelector((state) => state.menu);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data/menu.json");
//         const data = await response.json();
//         dispatch(setEvents(data.events));
//         // dispatch(setFilteredMenuList(data.categories));
//       } catch (error) {
//         console.error(error);
//       }
//       dispatch(setLoading(false));
//     };
//     fetchData();
//   }, []);

//   // console.log("menu items", events);
//   // console.log("menu filtered items", filteredMenuList);

//   return <>{children}</>;
// };

// export default MenuProvider;
