import React from "react";

const CardDisplay = props => {
  return <div className="flex justify-between flex-wrap">{props.children}</div>;
};

export default CardDisplay;
