import React from "react";

export default props => (
  <div
    className={`flex-grow bg-white bg-no-repeat bg-contain`}
    style={{
      width: "40%",
      position: "relative",
      borderTopLeftRadius: !props.reverse && "20px",
      borderBottomLeftRadius: !props.reverse && "20px",
      borderTopRightRadius: props.reverse && "20px",
      borderBottomRightRadius: props.reverse && "20px",
      backgroundImage: `linear-gradient(to bottom, rgba(255, 160, 0, 0.88),rgba(255, 160, 0, 0.88)),url(${require("../../Reusables/pressplay.png")})  `
    }}
  >
    {props.children}
  </div>
);
