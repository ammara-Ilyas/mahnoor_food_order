import React from "react";
import HeroSection from "@/components/miniWidgets/HeroSection";
import VenueOrders from "@/components/order/VenuesOrder";
const page = () => {
  return (
    <div>
      <HeroSection text="Order" />
      <VenueOrders />
    </div>
  );
};

export default page;
