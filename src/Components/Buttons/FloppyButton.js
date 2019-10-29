import React from "react";
import colors from "../../Reusables/Colors";

/**
 * Props
 * title=<'Value of the button'>
 * action=<function to execute onClick>
 * color=<'backgorundcolor of the button either primary or light'>
 * height=<'Height of the button'>
 * width=<'width of the Button'>
 * borderColor=<'only when the button background-color is transparent'>
 * textColor=<'color for the title of the button'>
 */

export default props => (
  <button
    className="cursor-pointer"
    style={{
      height: props.height,
      width: props.width ? props.width : "100%",
      background: props.color ? colors[props.color] : "transparent",
      border: props.borderColor ? `2px solid ${colors[props.borderColor]}` : "",
      boxSizing: "border-box",
      color: colors[props.textColor],
      borderRadius: "60px",
      fontWeight: 600,
      outline: "none",
      fontSize: "14px",
      lineheight: "17px",
      ...props.style
    }}
  >
    {props.title}
  </button>
);
