import React from "react";
import Logo from "../../Reusables/Logo";
import FloppyButton from "../Buttons/FloppyButton";

const LandingNavBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="m-5 ml-20">
          <div>{Logo}</div>
        </div>
        <div className="m-6 pt-2  pr-10 ">
          <FloppyButton
            title="Sign in"
            borderColor="light"
            textColor="light"
            height={38}
            width={157}
          />
        </div>
      </div>
    </>
  );
};

export default LandingNavBar;
