import React from "react";
import Logo from "../../Reusables/Logo";
import FloppyButton from "../Buttons/FloppyButton";
import { Video } from "cloudinary-react";
import Overlay from "../Overlays/Overlay";
import { Close } from "../../Reusables/Icons";
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
      {props.isOpen && (
        <Overlay>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontSize: 50,
              transform: "translate(-50%,-50%)"
            }}
          >
            <div
              className="flex justify-end"
              style={{ position: "absolute", left: "14.3em", top: 4 }}
            >
              <span onClick={props.handleOpen}>
                <Close />
              </span>
            </div>
            <video controls width="100%" height="200">
              <source
                src="https://res.cloudinary.com/dus4sijdt/video/upload/v1573816967/ADVISE_NEEDED_URGENTLY_-_AY_AND_WILLIAMS_a1mczl.mp4"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/dus4sijdt/video/upload/v1573816967/ADVISE_NEEDED_URGENTLY_-_AY_AND_WILLIAMS_a1mczl.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default LandingNavBar;
