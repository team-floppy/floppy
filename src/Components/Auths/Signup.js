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
        <AuthBoxHero image="https://images.pexels.com/photos/476/man-person-red-white.jpg?cs=srgb&dl=artist-circus-clown-476.jpg&fm=jpg">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontSize: 50,
              transform: "translate(-50%,-50%)",
              width: "100%"
            }}
          >
            <Text
              category="p"
              textContent="Already have an account?"
              lineHeight={20}
              fontSize={16}
              style={{
                textAlign: "center",
                color: colors.light,
                marginTop: 70
              }}
            />

            <div className="px-5">
              <FloppyButton
                title="Sign In"
                borderColor="light"
                textColor="light"
                height={41}
                action={props.handleOpenPopUpSwitch}
              />
            </div>
          </div>
        </AuthBoxHero>
        <AuthBoxInputs>
          <div className="flex justify-end pr-5 pt-3">
            <span onClick={props.handleOpenPopUp}>
              <Close />
            </span>
          </div>

          <div className="flex justify-center">
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
                  marginBottom: 20
                }}
              />

              <div
                className="flex pb-5"
                style={{ justifyContent: "space-evenly" }}
              >
                <div>{facebook}</div>
                <div>{twitter}</div>
                <div>{google}</div>
              </div>

              <Text
                category="p"
                textContent="OR"
                lineHeight={20}
                fontWeight={900}
                fontSize={20}
                style={{
                  textAlign: "center",
                  color: colors.light
                }}
              />

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
                <div className="pb-3">
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
                  textColor="light"
                  height={38}
                  style={{}}
                />
              </div>
            </div>
          </div>
        </AuthBoxInputs>
      </AuthBox>
    </div>
  );
};

export default Signup;
