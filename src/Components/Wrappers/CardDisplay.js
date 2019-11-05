import React from "react";

const CardDisplay = props => {
<<<<<<< HEAD
  return <div className="flex justify-around flex-wrap">{props.children}</div>;
=======
  return (
    <div
      className="flex justify-between flex-wrap"
      style={{ height: props.height, width: "100%" }}
    >
      {props.children}
    </div>
  );
>>>>>>> d50ff0fc015a5f9da1608014ee3b1fcc0fd6530c
};

export default CardDisplay;
