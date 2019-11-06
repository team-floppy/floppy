import React from "react";

const CardDisplay = props => {
  return (
    <div
      className="flex justify-between flex-wrap"
      style={{ height: props.height, width: "100%" }}
    >
      {props.children}
    </div>
  );
};

export default CardDisplay;
