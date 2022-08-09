import React from "react";
import "../../assets/css/HomePage.css";
import CuratedList from "../../components/CuratedList";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import TodaysDarshan from "../../components/TodaysDarshan";

export default function HomePage() {
  return (
    <div>
      <div className={"container"}></div>
      <div className={"container2"}></div>
      <div className={"image_carousel"}></div>
      <div className={"image"}></div>
      <div className={"frame_39615"}>
        <div className={"rect_4540"}></div>
      </div>
      <div className={"rect_4542"}></div>
      <div className={"rect_4538"}></div>
      {/* <div className={"ellipse_153"}></div> */}
      <Header />
      <Hero />
      <TodaysDarshan />
      <CuratedList />
      <Footer />
    </div>
  );
}
