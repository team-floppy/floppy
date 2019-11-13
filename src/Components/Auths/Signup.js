import React from "react";
import AuthBox from "../Wrappers/AuthBox";
import FloppyInput from "../Input/FloppyInput";
import FloppyButton from "../Buttons/FloppyButton";
import { Close } from "../../Reusables/Icons";
import colors from "../../Reusables/Colors";
import { facebook, twitter, google } from "../../Reusables/Socials";
import Text from "../Typography/Text";
import AuthBoxHero from "../Wrappers/AuthBoxHero";
import AuthBoxInputs from "../Wrappers/AuthBoxInputs";

const Signup = props => {
  return (
    <div>
      <AuthBox>
        <AuthBoxInputs>
          <div
            className="flex justify-end"
            style={{ position: "absolute", left: "7.3em", top: 15 }}
          >
            <span onClick={props.handleOpenPopUp}>
              <Close />
            </span>
          </div>

          <div className="flex justify-center pt-10">
            <div>
              <Text
                category="p"
                textContent="Create Account"
                lineHeight={59}
                fontWeight={600}
                fontSize={30}
                style={{
                  textAlign: "center",
                  color: colors.primary,
                  marginBottom: 15
                }}
              />

              <div
                className="flex pb-3"
                style={{ justifyContent: "space-evenly" }}
              >
                <div>{facebook}</div>
                <div>{twitter}</div>
                <div>{google}</div>
              </div>

              <p
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: colors.light
                }}
              >
                or
              </p>

              <div>
                <div className="pb-3 pt-5">
                  <FloppyInput
                    type="text"
                    bgColor="dark"
                    placeholder="Username"
                    width={281}
                    height={28}
                  />
                </div>

                <div className="pb-3">
                  <FloppyInput
                    type="text"
                    bgColor="dark"
                    placeholder="Name"
                    success={true}
                    error={false}
                    width={281}
                    height={28}
                  />
                </div>

                <div className="pb-3">
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
                <div>
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
                  title="Sign Up"
                  color="primary"
                  textColor="darkx"
                  height={41}
                  style={{}}
                />
              </div>
              <div style={{ position: "relative" }}>
                <span
                  onClick={() => props.handleOpenPopUpSwitch()}
                  style={{
                    fontSize: 10,
                    position: "absolute",
                    top: 15,
                    left: 80,
                    textAlign: "center",
                    color: colors.light
                  }}
                >
                  Already have an account?
                  <a style={{ color: colors.primary, marginLeft: 4 }}>
                    Sign in
                  </a>
                </span>
              </div>
            </div>
          </div>
        </AuthBoxInputs>
      </AuthBox>
    </div>
  );
};

export default Signup;
