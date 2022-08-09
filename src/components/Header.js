import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Darshan from "../assets/images/DharoharDarshan.png";

export default function Header(props) {
  return (
    <div style={{backgroundColor : props.color}}>
      <img className={"DharoharDarshan"} src={Darshan} />
      <span className={"DharoharDarshanText"}>Dharohar Darshan</span>
      <span className={"HomeText"}>Home</span>
      <span className={"MapViewText"}>Map View</span>
      <span className={"AboutText"}>About</span>
      <span className={"DiscoverText"}>Discover</span>
      <span className={"BlogText"}>Blog</span>
      <div className={"LanguageDropdown"}>
        <span className={"EnglishText"}>English</span>
        <span className={"LanguageVector"}>
          <FaChevronDown className={"Vector"} />
        </span>
      </div>
    </div>
  );
}
