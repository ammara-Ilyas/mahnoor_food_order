import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venueOrders: [
    // ✅ Changed 'orders' to 'venueOrders' for clarity
    {
      id: "INV904",
      venue: "Pickup Instore @ Reflexon Office",
      address: "51 Forester Street, Surry Hills, NSW, 2010",
      date: "Wednesday, 11 May 2022",
      price: 1.0,
      status: "PENDING",
    },
    {
      id: "INV872",
      venue: "Test Venue",
      address: "Abbotsbury, New South Wales, 2000",
      date: "Thursday, 12 May 2022",
      price: 15.3,
      status: "DELIVERED",
    },
    {
      id: "INV765",
      venue: "Grand Event Hall",
      address: "22 King Street, Melbourne, VIC, 3000",
      date: "Friday, 13 May 2022",
      price: 25.0,
      status: "CONFIRMED",
    },
    {
      id: "INV678",
      venue: "City Conference Center",
      address: "10 Queen Street, Brisbane, QLD, 4000",
      date: "Saturday, 14 May 2022",
      price: 50.0,
      status: "PENDING",
    },
    {
      id: "INV543",
      venue: "Sunset Banquet Hall",
      address: "99 Ocean Drive, Gold Coast, QLD, 4217",
      date: "Sunday, 15 May 2022",
      price: 75.5,
      status: "CANCELLED",
    },
  ],
};

const venueOrderSlice = createSlice({
  name: "venueOrder",
  initialState,
  reducers: {
    addVenueOrder: (state, action) => {
      state.venueOrders.push({ ...action.payload, status: "PENDING" });
    },
    cancelVenueOrder: (state, action) => {
      state.venueOrders = state.venueOrders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { addVenueOrder, cancelVenueOrder } = venueOrderSlice.actions;
export default venueOrderSlice.reducer;
