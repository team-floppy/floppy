import React from "react";

export default props => (
  <div
    className={`flex-grow bg-fixed ${
      props.isLogin ? "bg-center" : "bg-left"
    } bg-no-repeat bg-contain`}
    style={{
      width: "40%",
      backgroundImage: `linear-gradient(to bottom, rgba(255, 160, 0, 0.80),rgba(255, 160, 0, 0.80)),url(${props.image})  `
    }}
  >
    {props.children}
  </div>
);
