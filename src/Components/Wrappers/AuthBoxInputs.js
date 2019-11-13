import React from "react";
import { isMobile } from "react-device-detect";

export default props => (
  <div
    style={{
      borderRadius: "20px",
      width: "100%",
      height: "100%",
      backgroundColor: "#212121",
      position: "relative"
    }}
  >
    {props.children}
  </div>
);
