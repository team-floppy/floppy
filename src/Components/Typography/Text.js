import React from "react";

export default props => {
  return props.category ? (
    <props.category
      style={{
        fontWeight: props.fontWeight ? props.fontWeight : 600,
        fontSize: props.fontSize ? props.fontSize : 24,
        lineheight: props.lineheight ? props.lineheight : 59,
        ...props.style
      }}
    >
      {props.textContent}
    </props.category>
  ) : (
    <p>{props.textContent}</p>
  );
};
