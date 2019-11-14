import React from "react";
import { Link } from "react-router-dom";
import AuthBox from "../Wrappers/AuthBox";
import FloppyInput from "../Input/FloppyInput";
import FloppyButton from "../Buttons/FloppyButton";
import { Close } from "../../Reusables/Icons";
import colors from "../../Reusables/Colors";
import { facebook, twitter, google } from "../../Reusables/Socials";
import Text from "../Typography/Text";
import AuthBoxHero from "../Wrappers/AuthBoxHero";
import AuthBoxInputs from "../Wrappers/AuthBoxInputs";

const Signin = props => {
  return (
    <div>
      <AuthBox>
        <AuthBoxInputs reverse>
          <div
            className="flex justify-end"
            style={{ position: "absolute", left: "7.3em", top: 15 }}
          >
            <span onClick={props.handleOpenPopUp}>
              <Close />
            </span>
          </div>
          <div
            className="flex justify-center items-center "
            style={{ height: "100%" }}
          >
            <div>
              <Text
                category="p"
                textContent="Sign In"
                lineHeight={59}
                fontWeight={600}
                fontSize={30}
                style={{
                  textAlign: "center",
                  color: colors.primary,
                  marginBottom: 30
                }}
              />

              <div className="flex" style={{ justifyContent: "space-evenly" }}>
                <div>{facebook}</div>
                <div>{twitter}</div>
                <div>{google}</div>
              </div>

              <p
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: colors.light,
                  marginTop: 22
                }}
              >
                or
              </p>
              <div>
                <div className="pt-6">
                  <FloppyInput
                    type="text"
                    bgColor="dark"
                    placeholder="Email"
                    success={false}
                    error={true}
                    width={281}
                    height={28}
                  />
                </div>
                <div className="pt-3">
                  <FloppyInput
                    type="password"
                    bgColor="dark"
                    placeholder="Password"
                    success={true}
                    error={false}
                    width={281}
                    height={28}
                  />
                </div>

                <FloppyButton
                  title="Sign In"
                  color="primary"
                  textColor="darkX"
                  height={41}
                  
                />
              </div>
              <div style={{ position: "relative" }}>
                <span
                  onClick={() => props.handleOpenPopUpSwitch("isSignUp")}
                  style={{
                    fontSize: 10,
                    position: "absolute",
                    top: 20,
                    left: 80,
                    textAlign: "center",
                    color: colors.light
                  }}
                >
                  Don't have an account?
                  <Link style={{ color: colors.primary, marginLeft: 4 }}>
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </AuthBoxInputs>
      </AuthBox>
    </div>
  );
};

export default Signin;

// action={() => props.handleOpenPopUpSwitch("isSignUp")}

{
  /* <div
style={{
  position: "absolute",
  top: "50%",
  left: "50%",
  fontSize: 50,
  transform: "translate(-50%,-50%)",
  width: "100%"
}}
> */
}
