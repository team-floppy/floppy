import React, { Component } from "react";

export default props => (
  <div
    style={{
      width: "400px",
      height: "484px",
      boxShadow: "0px 6px 11px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px"
    }}
  >
    {props.children}
  </div>
);
