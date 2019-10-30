import React from "react";
import { Play } from "../../Reusables/Icons";

const Card = props => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dus4sijdt/image/upload/v1572158922/welcome_uqqank.gif)",
        backgroundColor: "red",
        height: 220,
        width: 220,
        borderRadius: 20
      }}
    >
      <div className="w-full  p-3 flex justify-end">
        <Play />
      </div>
    </div>
  );
};

export default Card;
