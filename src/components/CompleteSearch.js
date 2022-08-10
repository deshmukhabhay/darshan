import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCaretDownFill } from 'react-icons/bs';


export default function CompleteSearch() {
  return (
    <div>
      {/* Big Search */}

      <div className={"rect_4501"}>
        <div className={"search_icon"}>
          <BiSearchAlt2 />
        </div>
      </div>
      <div className={"search_text"}>Search a place</div>

      {/* Type of state filter  */}
      <div className={"state"}>
        <div className={"group_39560"}>
          <div className={"rect_4502"}>
            <div className={"filter_state"}>Filter State</div>
            <BsCaretDownFill className={"state_vector"} />
          </div>
        </div>
      </div>

      {/* Type of site filter  */}
      <div className={"site"}>
        <div className={"group_39560"}>
          <div className={"rect_4502"}>
            <div className={"filter_state"}>Type of site</div>
            <BsCaretDownFill className={"state_vector"} />
          </div>
        </div>
      </div>

      {/* Date filter */}

      <div className={"date_filter"}>
        <div className={"group_39590"}>
          <div className={"rect_4504"}></div>
          <div className={"date_filter_text"}>Datewise</div>
          <div className={"date_filter_datewise"}></div>
          <BsCaretDownFill className={"state_vector"} />
        </div>
      </div>

      
    </div>
  );
}
