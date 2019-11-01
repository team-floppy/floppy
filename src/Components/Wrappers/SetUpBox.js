import React from "react";
import { isMobile } from "react-device-detect";

export default props => {
  return (
    <div
      className="flex justify-center p-5"
      style={{
        width: isMobile ? "18em" : "18em",
        height: isMobile ? "18em" : 350,
        background: "#333333",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        flex: 1
      }}
    >
      {props.children}
    </div>
  );
};
