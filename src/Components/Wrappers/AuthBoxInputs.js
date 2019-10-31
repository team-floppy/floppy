import React from "react";
import { isMobile } from "react-device-detect";

export default props => (
  <div
    style={{
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      width: isMobile ? "100%" : "60%",
      backgroundColor: "#212121"
    }}
  >
    {props.children}
  </div>
);
