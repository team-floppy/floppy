import React from "react";

const CardDisplay = props => {
  return (
    <div
      className="flex  flex-wrap"
      style={{ height: props.height, width: "100%", justifyContent: "evenly" }}
    >
      {props.children}
    </div>
  );
};

export default CardDisplay;
