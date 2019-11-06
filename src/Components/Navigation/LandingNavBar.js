import React from "react";
import Logo from "../../Reusables/Logo";
import FloppyButton from "../Buttons/FloppyButton";

const LandingNavBar = props => {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <div>{Logo}</div>
        </div>
        <div className=" ">
          <FloppyButton
            title="Sign in"
            borderColor="light"
            textColor="light"
            height={38}
            width={157}
            action={props.handleOpenPopUp}
          />
        </div>
      </div>
    </>
  );
};

export default LandingNavBar;
