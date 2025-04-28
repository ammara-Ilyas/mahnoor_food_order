// "use client";
// import { store } from "./store";
// import { Provider } from "react-redux";
// function ReduxProviders({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

// export default ReduxProviders;

"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";

import {
  setMenuList,
  setFilteredMenuList,
  setLoading,
} from "@/store/slice/MenuSlice";
import { setEvents } from "./slice/EventSlice";
function DataInitializer({ menuData, eventData, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuData) {
      console.log("menu data in Redux Proveider", menuData.categories);

      dispatch(setMenuList(menuData.categories));
      dispatch(setFilteredMenuList(menuData.categories));
    }
    if (eventData) {
      console.log("event data in Redux Provider", eventData);
      dispatch(setEvents(eventData));
    }
    dispatch(setLoading(false));
  }, [dispatch, menuData, eventData]);

  return children;
}

export default function ReduxProviders({ children, menuData, eventData }) {
  return (
    <Provider store={store}>
      {/* ✅ Wrap children inside DataInitializer to dispatch the fetched data */}
      <DataInitializer menuData={menuData} eventData={eventData}>
        {children}
      </DataInitializer>
    </Provider>
  );
}
