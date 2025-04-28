"use client"; // Ensure this component runs on the client side

import { useParams } from "next/navigation";
import SingleEvent from "@/components/event/SingleEvent";
import HeroSection from "@/components/miniWidgets/HeroSection";
import { HeadingText } from "@/components/miniWidgets/Heading";
import { useSelector } from "react-redux";
import Gallery from "@/components/event/EventImageGallery";
export default function Page() {
  const param = useParams();
  console.log("id", param?.id);

  if (!param?.id) {
    return (
      <p>
        <CircularProgress size={24} style={{ color: "#fff" }} />
      </p>
    );
  }

  return (
    <>
      {/* <Gallery /> */}
      <SingleEvent id={param.id} />
    </>
  );
}
