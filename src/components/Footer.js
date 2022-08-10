import React from "react";
import { BsInstagram, BsLinkedin, BsTelephone,  } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer(props) {
  const {page} = props;
  return (
    <div className={page === "location" ? "footer2" : "footer"}>
      <div className={"govt_logos"}>
        <div>
          <div className={"partner1"}></div>
          <div className={"partner2"}></div>
          <div className={"partner3"}></div>
          <div className={"partner4"}></div>
        </div>
        <div className={"group_39629"}></div>
        <div className={"group_39633"}></div>
      </div>
      <div className={"rect_4539"}></div>

      <div className={"group_39661"}></div>

      <div className={"contact"}>
        <div className={"contact_text"}>Contact</div>
      </div>

      <div className={"website"}>
        <div className={"master_website"}>
          <div className={"line_rounded_website"}>
            {/* <div className={"master_website_phone"}></div> */}
            <AiOutlineMail className={"website_image"} />
          </div>

          <div className={"master_website_text"}>Web information manager</div>
        </div>
      </div>

      <div className={"contact_number"}>
        <div className={"master_contact_number"}>
          <div className={"line_rounded_phone"}>
            {/* <div className={"master_contact_number_phone"}></div> */}
            <BsTelephone className={"master_contact_number_phone_image"} />
          </div>

          <div className={"master_contact_number_text"}>+020 2222020202</div>
        </div>
      </div>

      <div className={"px24"}>
        <div className={"logo"}></div>
        <div className={"copyright"}>Our Country, Our Heritage</div>
        <div className={"socialmedia"}>
          <FaFacebookF className={"socialmediaf"} />
          <FaTwitter className={"socialmediat"} />
          <BsInstagram className={"socialmediai"} />
          <BsLinkedin className={"socialmedial"} />
          <FaYoutube className={"socialmediay"} />
        </div>
      </div>

      <div className={"footer_link1"}></div>
      <div className={"footer_link1_column"}>
        <div className={"footer_link1_column_title"}>Links</div>
        <div className={"footer_link1_column_links"}>
          <div className={"fl1link1"}>
            <div className={"fl1link1_master"}>
              <div
                className={"fl1link1_master_text"}
                style={{ textAlign: "left" }}
              >
                ASI
              </div>
            </div>
          </div>
          <div className={"fl1link2"}>
            <div className={"fl1link2_master"}>
              <div
                className={"fl1link2_master_text"}
                style={{ textAlign: "left" }}
              >
                Culture ministry
              </div>
            </div>
          </div>
          <div className={"fl1link3"}>
            <div className={"fl1link3_master"}>
              <div
                className={"fl1link3_master_text"}
                style={{ textAlign: "left" }}
              >
                Incredible India
              </div>
            </div>
          </div>
          <div className={"fl1link4"}>
            <div className={"fl1link4_master"}>
              <div
                className={"fl1link4_master_text"}
                style={{ textAlign: "left" }}
              >
                Tourism ministry
              </div>
            </div>
          </div>
          <div className={"fl1link5"}>
            <div className={"fl1link5_master"}>
              <div
                className={"fl1link5_master_text"}
                style={{ textAlign: "left" }}
              >
                Protected monuments
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"footer_link2"}>
        <div className={"footer_link2_column"}>
          <div className={"footer_link2_column_title"}>Links</div>
          <div className={"footer_link2_column_links"}>
            <div className={"fl2link1"}>
              <div className={"fl2link1_master"}>
                <div
                  className={"fl2link1_master_text"}
                  style={{ textAlign: "left" }}
                >
                  Swadesh Darshan
                </div>
              </div>
            </div>
            <div className={"fl2link2"}>
              <div className={"fl2link2_master"}>
                <div
                  className={"fl2link2_master_text"}
                  style={{ textAlign: "left" }}
                >
                  Copyright Policy
                </div>
              </div>
            </div>
            <div className={"fl2link3"}>
              <div className={"fl2link3_master"}>
                <div
                  className={"fl2link3_master_text"}
                  style={{ textAlign: "left" }}
                >
                  Hyperlinking Policy
                </div>
              </div>
            </div>
            <div className={"fl2link4"}>
              <div className={"fl2link4_master"}>
                <div
                  className={"fl2link4_master_text"}
                  style={{ textAlign: "left" }}
                >
                  Help
                </div>
              </div>
            </div>
            <div className={"fl2link5"}>
              <div className={"fl2link5_master"}>
                <div
                  className={"fl2link5_master_text"}
                  style={{ textAlign: "left" }}
                >
                  Feedback
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"footer_content"}></div>
      <div className={"footer_left"}>Copyright © 2022 ASI</div>
      <div className={"footer_right"}>
        All Rights Reserved | Terms and Conditions | Privacy Policy
      </div>
    </div>
  );
}
