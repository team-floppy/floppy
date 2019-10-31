import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import color from "../../Reusables/Colors";
import { checked, cancel } from "../../Reusables/Icons";
export default props => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      style={{
        display: "inline-flex",
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
          width: "100%",
          fontWeight: "normal",
          fontSize: 14,
          lineHeight: 17,
          height: 28,
          borderRadius: "60px",
          outline: "none",
          background: color[props.bgColor],
          color: props.bgColor === "dark" ? color["light"] : color["dark"]
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {props.error && cancel}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {props.success && checked}
      </div>
    </div>
  );
};
