import React from "react";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

import "../../assets/css/HomePage.css";
import { BiChevronLeft } from "react-icons/bi";
import ReactPannellum, { getConfig } from "react-pannellum";
import Img from "../../assets/images/somnath-temple-banner.jpeg";
import Group1 from "../../assets/images/Group1.png";
import EllipseFacts from "../../assets/images/Ellipse150.png";
import "./LocationPage.css";

export default function LocationPage() {
  const click = () => {
    console.log(getConfig());
  };

  const config = {
    autoRotate: -2,
    autoLoad: true,
    showZoomCtrl: true,
  };

  return (
    <div>
      <div className={"container3"}></div>
      <Header2 />
      <div className={"banner_text"}>Somnath Temple</div>
      <BiChevronLeft className={"vector"} />
      <div className={"group_39603"}>
        <ReactPannellum
          id="1"
          style={{
            width:"100%",
            height:"100%"
          }}
          sceneId="firstScene"
          imageSource={Img}
          config={config}
        />
      </div>
      {/* Slider */}
      <div className={"frame_39611"}>
        <div className="group_39607">
          <div className={"rect_26"}></div>
        </div>
        <div className="group_39608">
          <div className={"rect_27"}></div>
        </div>
        <div className="group_39612">
          <div className={"rect_28"}></div>
        </div>
        <div className="group_39613">
          <div className={"rect_29"}></div>
        </div>
        <div className="group_39614">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39615">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39616">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39617">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39618">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39619">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39610">
          <div className={"rect_30"}></div>
        </div>
        <div className="group_39611">
          <div className={"rect_30"}></div>
        </div>
      </div>

      <div className={"about"}>About</div>
      <div className={"about_text"}>
        One of the twelve Jyotirlingas is reported to have a 3-storey building
        under the Somnath temple. Orchology experts from IIT Gandhinagar and 4
        associate institutions have discovered this. The investigation was
        carried out on the orders of the Prime Minister and Somnath temple
        trustee Narendra Modi. About a year ago, in a meeting held in Delhi,
        Modi had asked the department of archaelogy to investigate this.
      </div>
      <div className={"facts"}>Facts</div>

      <div className={"facts_ellipse1"}>
        <img src={EllipseFacts}/>
      </div>
      <div className={"facts_ellipse2"}>
      <img src={EllipseFacts}/>
      </div>
      <div className={"facts_ellipse3"}>
      <img src={EllipseFacts}/>
      </div>

      <div className={"frame_39603"}>
      <div className={"frame_39603_text"}>Read more...</div>
      </div>
      <div className={"facts_text1"}>
        The temple was suffer destruction at the hands of Mahmud Ghazni in 1024,
        Khilji’s army in 1296, Muzaffar Shah in 1375, Mahmud Begada in 1451 and
        Aurangzeb in 1665.
      </div>
      <div className={"facts_text2"}>
        The legend has it that the initial structure of the temple was first
        built by Moon God who constructed thetemple with gold. The Sun God used
        silver for its construction, whereas Lord Krishna made it with the help
        of sandalwood.
      </div>
      <div className={"facts_text3"}>
        The modern day Somnath Temple was built over five years, from 1947 to
        1951 and was inaugurated by then President of India Dr Rajendra Prasad.
      </div>
      <div className={"heritage"}>Nearby Heritage Sites</div>
      <div className="group_39655">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      <div className="group_39653">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      <div className="group_39651">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      <div className="group_39654">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      <div className="group_39652">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      <div className="group_39646">
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
        <img className={"group81"} src={Group1} />
      </div>
      {/* <div onClick={() => click()}>Click me</div> */}
      <div className={"rect_32"}></div>
      <div className={"rect_35"}></div>
      <div className={"rect_4487"}></div>
      <Footer page={"location"}/>
    </div>
  );
}
