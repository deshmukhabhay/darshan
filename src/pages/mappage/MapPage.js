import React from "react";
import "../../assets/css/HomePage.css";
import CuratedList from "../../components/CuratedList";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import CompleteSearch from "../../components/CompleteSearch";
import "./MapPage.css";
import IndiaMap from "../../assets/images/India.png";
import Group25 from "../../assets/images/Group25.png";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={"container3"}></div>
      {/* <div className={"rect_4542"}></div> */}
      {/* <div className={"rect_4538"}></div> */}
      <Header2 />
      <CompleteSearch />
      <div className={"map_component"}>
        <div className={"group_39662"}>
          <div className={"group_39594"}></div>
          <img className={"map"} style={{ height: "1040px" }} src={IndiaMap} />
          <img className={"group27"} src={Group25} />
          <img className={"group28"} src={Group25} />
          <div className={"group_39664"}>
            <div style={{ display: "flex" }}>
              <div className={"rect_4527"}>
                <div className={"rect_4528"}>
                  <div className={"group_39596"}>
                    <div className={"group_39596_text"}>Someshwar temple</div>
                    <div className={"group_39596_text2"}>Gujarat</div>
                  </div>
                  <div className={"group_39664_view_now"} onClick={()=>navigate("/location", { state: "Someshwar temple" })}>View now ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={"group_39697"}>
            <div style={{ display: "flex" }}>
              <div className={"rect_4527"}>
                <div className={"rect_4528"}>
                  <div className={"group_39596"}>
                    <div className={"group_39596_text"}>Ganpati Temple</div>
                    <div className={"group_39596_text2"}>Maharashtra</div>
                  </div>
                  <div className={"group_39664_view_now"} onClick={()=>navigate("/location", { state: "Ganpati Temple" })}>View now ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={"group_39698"}>
            <div style={{ display: "flex" }}>
              <div className={"rect_4527"}>
                <div className={"rect_4528"}>
                  <div className={"group_39596"}>
                    <div className={"group_39596_text"}>Site of Sahet</div>
                    <div className={"group_39596_text2"}>UP</div>
                  </div>
                  <div className={"group_39664_view_now"} onClick={()=>navigate("/location", { state: "Site of Sahet" })}>View now ></div>
                </div>
              </div>
            </div>
          </div>
          <img className={"group29"} src={Group25} />
        </div>
      </div>
      <CuratedList />
      <Footer />
    </div>
  );
}
