import React from "react";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

import "../../assets/css/HomePage.css";
import { BiChevronLeft } from "react-icons/bi";


export default function MapPage() {
  return (
    <div>
      <div className={"container3"}></div>
      <Header2 />
      <div className={"banner_text"}>Somnath Temple</div>
      <BiChevronLeft className={"vector"}/>
      <Footer />
    </div>
  );
}
