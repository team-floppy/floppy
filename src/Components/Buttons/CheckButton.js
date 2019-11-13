import React, { useState } from "react";
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

export default props => {
  const [checked, setchecked] = useState(false);

  const handleChecked = () => {
    props.handChoice(props.title);
    setchecked(!checked);
  };
  return (
    <button
      className="cursor-pointer mb-3 p-3"
      onClick={handleChecked}
      style={{
        width: "auto",
        background: checked ? colors.primary : "transparent",
        border:
          props.borderColor && !checked
            ? `2px solid ${colors[props.borderColor]}`
            : `2px solid ${colors.darkX}`,
        boxSizing: "border-box",
        color: checked ? colors.light : colors[props.textColor],
        borderRadius: "60px",
        fontWeight: 600,
        outline: "none",
        fontSize: "10px",
        lineheight: "17px",
        ...props.style
      }}
    >
      {props.title}
    </button>
  );
};
