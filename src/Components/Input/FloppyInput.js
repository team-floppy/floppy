import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import color from "../../Reusables/Colors";
import { checked, cancel, search } from "../../Reusables/Icons";
export default props => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className="pr-3 bg-white"
      style={{
        display: "flex",
        // flex: "1 1 auto",
        position: "relative",
        width: "100%",
        border: `2px solid ${focus ? color.primary : "transparent"}`,
        borderRadius: "60px",
        overflow: "hidden",
        background: color[props.bgColor]
      }}
    >
      <input
        type={props.type}
        value={props.value}
        onChange={props.action}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        style={{
          flex: 1,
          paddingLeft: "20px",
          width: props.width,
          fontWeight: "normal",
          fontSize: 14,
          lineHeight: 17,
          height: props.height,
          borderRadius: "60px",
          outline: "none",
          background: color[props.bgColor],
          color: props.bgColor === "dark" ? color["light"] : color["dark"],
          padding: props.padding
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {props.search && search}
      </div>
    </div>
  );
};
