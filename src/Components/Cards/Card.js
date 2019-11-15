import React, { useState } from "react";
import { Play } from "../../Reusables/Icons";
import Text from "../Typography/Text";
import colors from "../../Reusables/Colors";
import { isMobile } from "react-device-detect";

const Card = props => {
  const [thumb, setThumb] = useState(props.static);

  const HandleMouseEnter = () => {
    if (!props.event) {
      setThumb(props.thumbnail);
      return;
    }
  };

  const HandleMouseLeave = () => {
    if (!props.event) {
      setThumb(props.static);
      return;
    }
  };
  return (
    <div
      style={{
        ...props.style,
        height: isMobile ? 180 : 220,
        width: isMobile ? 180 : 220,
        marginBottom: "4.3rem"
      }}
    >
      <div
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${thumb})`,
          height: "100%",
          width: "100%",
          borderRadius: 20
        }}
      >
        {!props.event && (
          <div className="w-full  p-3 flex justify-end" onClick={props.action}>
            <Play />
          </div>
        )}
      </div>
      <div className="mt-2">
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "22px",
            color: colors.light
          }}
        >
          {props.title}
        </p>
      </div>
      <div className="flex justify-between">
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "17px",
            color: "grey"
          }}
        >
          {props.username}
        </p>

        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "17px",
            color: "grey"
          }}
        >
          {`${props.views}  views`}
        </p>
      </div>
    </div>
  );
};

export default Card;
