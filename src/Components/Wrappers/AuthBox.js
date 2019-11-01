import React, { Component } from "react";

export default props => (
  <div
    className="flex justify-between"
    style={{
      width: "15em",
      height: "10em",
      boxShadow: "0px 6px 11px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px"
    }}
  >
    {props.children}
  </div>
);
