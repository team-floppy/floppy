import React, { useState } from "react";
import { Play } from "../../Reusables/Icons";
import Text from "../Typography/Text";
import colors from "../../Reusables/Colors";

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
    <div className="mb-16" style={{ height: 220, width: 220 }}>
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
          <div className="w-full  p-3 flex justify-end">
            <Play />
          </div>
        )}
      </div>
      <div className="mt-1">
        <Text
          category="p"
          textContent={props.title}
          lineHeight={20}
          fontSize={15}
          style={{
            color: colors.light
          }}
        />
      </div>
      <div className="mt-1 flex justify-between">
        <Text
          category="p"
          textContent={props.username}
          lineHeight={14}
          fontSize={10}
          style={{
            color: colors.primary
          }}
        />
        <Text
          category="p"
          textContent={`${props.views}  views`}
          lineHeight={14}
          fontSize={10}
          style={{
            color: colors.light
          }}
        />
      </div>
    </div>
  );
};

export default Card;
