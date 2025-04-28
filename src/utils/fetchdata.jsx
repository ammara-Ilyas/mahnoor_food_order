// utils/initializeData.js
import {
  setMenuList,
  setFilteredMenuList,
  setEvents,
  setLoading,
  setCategory,
} from "@/store/slice/MenuSlice";
export const initializeData = async (dispatch) => {
  try {
    const menuResponse = await fetch("/data/menu.json");
    const menuData = await menuResponse.json();
    dispatch(setMenuList(menuData.categories));
    dispatch(setFilteredMenuList(menuData.categories));

    const eventResponse = await fetch("/data/events.json");
    const eventData = await eventResponse.json();
    dispatch(setEvents(eventData.categories));
    console.log("fetch data once time");
  } catch (error) {
    console.error("Error initializing data:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
