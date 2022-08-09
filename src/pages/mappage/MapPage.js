import React from "react";
import "../../assets/css/HomePage.css";
import CuratedList from "../../components/CuratedList";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import CompleteSearch from "../../components/CompleteSearch";

export default function MapPage() {
  return (
    <div>
      <div className={"container3"}></div>
      {/* <div className={"rect_4542"}></div> */}
      {/* <div className={"rect_4538"}></div> */}
      <Header2 />
      <CompleteSearch />
      <CuratedList />
      <Footer />
    </div>
  );
}
