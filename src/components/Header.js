import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Darshan from "../assets/images/DharoharDarshan.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor : props.color}}>
      <div onClick={()=> navigate("/")}>
        <img className={"DharoharDarshan"} src={Darshan} />
        <span className={"DharoharDarshanText"}>Dharohar Darshan</span>
      </div>
      <span className={"HomeText"}  onClick={()=> navigate("/")} >Home</span>
      <span className={"MapViewText"} onClick={()=> navigate("/mappage")}>Map View</span>
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
