import React from "react";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

import "../../assets/css/HomePage.css";
import { BiChevronLeft } from "react-icons/bi";
import ReactPannellum, { getConfig } from "react-pannellum";
import Img from '../../assets/images/somnath-temple-banner.jpeg'
export default function MapPage() {

  const click = () => {
      console.log(getConfig());
  }

  const config = {
    autoRotate: -2,
    autoLoad: true,
    showZoomCtrl: true
  };


  return (
    <div>
      <div className={"container3"}></div>
      <Header2 />
      <div className={"banner_text"}>Somnath Temple</div>
      <BiChevronLeft className={"vector"}/>
      <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource={Img}
          config={config}
        />
        <div onClick={() => click()}>Click me</div>
      <Footer />
    </div>
  );
}
