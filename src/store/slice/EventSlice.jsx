import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  totalPrice: 1,
  isBook: false,
  IsMenuForm: "payment",
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    setIsBook: (state, action) => {
      state.isBook = action.payload;
    },
    setIsMenuForm: (state, action) => {
      state.IsMenuForm = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
      // console.log("Updated Ordered price:", state.totalPrice);
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { setTotalPrice, setIsBook, setEvents, setIsMenuForm } =
  eventSlice.actions;

export default eventSlice.reducer;
