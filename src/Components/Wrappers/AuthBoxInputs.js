import React from "react";
import { isMobile } from "react-device-detect";

export default props => (
  <div
    className="flex justify-center"
    style={{
      width: isMobile ? "100%" : "60%",
      backgroundColor: "#212121"
    }}
  >
    {props.children}
  </div>
);
