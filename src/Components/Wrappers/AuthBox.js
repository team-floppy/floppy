import React, { Component } from "react";

export default props => (
  <div className="flex justify-between" style={{ height: "100vh" }}>
    {props.children}
  </div>
);
