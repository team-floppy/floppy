import React from "react";

const SubCardDisplay = props => {
  return (
    <div
      className="flex  flex-wrap"
      style={{
        height: props.height,
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      {props.children}
    </div>
  );
};

export default SubCardDisplay;
