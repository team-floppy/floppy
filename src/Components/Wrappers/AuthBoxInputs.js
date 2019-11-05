import React from "react";
import { isMobile } from "react-device-detect";

export default props => (
  <div
    style={{
      borderTopRightRadius: !props.reverse && "20px",
      borderBottomRightRadius: !props.reverse && "20px",
      borderTopLeftRadius: props.reverse && "20px",
      borderBottomLeftRadius: props.reverse && "20px",
      width: isMobile ? "100%" : "60%",
      backgroundColor: "#212121"
    }}
  >
    {props.children}
  </div>
);
