// store.js
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/MenuSlice";
import eventReducer from "./slice/EventSlice";
import orderReducer from "./slice/OrderSlice";
import venueOrderReducer from "./slice/VenuOrderSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    event: eventReducer,
    order: orderReducer,
    venueOrder: venueOrderReducer,
  },
});

export default store;
