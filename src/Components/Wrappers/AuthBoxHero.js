import React from "react";

export default props => (
  <div
    className={`flex-grow bg-white bg-no-repeat bg-contain`}
    style={{
      width: "40%",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      backgroundImage: `linear-gradient(to bottom, rgba(255, 160, 0, 0.88),rgba(255, 160, 0, 0.88)),url(${require("../../Reusables/pressplay.png")})  `
    }}
  >
    {props.children}
  </div>
);
