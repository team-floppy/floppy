import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Button from "../../Components/Buttons/FloppyButton";
import AuthBox from "../../Components/Wrappers/AuthBox";
import AuthBoxHero from "../../Components/Wrappers/AuthBoxHero";
import AuthBoxInputs from "../../Components/Wrappers/AuthBoxInputs";
import Logo from "../../Reusables/Logo";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import { facebook, twitter, google } from "../../Reusables/Socials";
import FloppyInput from "../../Components/Input/FloppyInput";
import { relative } from "upath";

class Register extends Component {
  render() {
    return (
      <section>
        <AuthBox>
          {!isMobile && (
            <AuthBoxHero
              image={
                "https://res.cloudinary.com/dus4sijdt/image/upload/v1572142318/Rectangle_45_v10qcg.png"
              }
            >
              <div
                className="flex flex-col  items-center "
                style={{ height: "100vh" }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "5em",
                      right: "4em",
                      width: "100%"
                    }}
                  >
                    {Logo}
                  </div>
                </div>
                <div style={{ marginTop: "15em" }}>
                  <Text
                    category="p"
                    textContent="Welcome to floppy"
                    lineHeight={59}
                    fontWeight={600}
                    fontSize={30}
                    style={{
                      textAlign: "center",
                      color: colors.light,
                      marginBottom: 5
                    }}
                  />

                  <Text
                    category="p"
                    textContent="Laugh , Share & Shine"
                    lineHeight={20}
                    fontWeight={500}
                    fontSize={16}
                    style={{
                      textAlign: "center",
                      color: colors.light,
                      marginBottom: 20
                    }}
                  />

                  <Button
                    title="Sign in"
                    borderColor="light"
                    textColor="light"
                    height={50}
                    width={266.8}
                    style={{ marginTop: 20 }}
                  />
                </div>
              </div>
            </AuthBoxHero>
          )}
          <AuthBoxInputs>
            <div className={`mt-20 mb-20  ${isMobile ? "w-11/12" : "w-2/4"}`}>
              <div>
                <Text
                  category="p"
                  textContent="Create Account"
                  lineHeight={59}
                  fontWeight={600}
                  fontSize={30}
                  style={{
                    textAlign: "center",
                    color: colors.primary
                  }}
                />

                <div
                  className="flex   mt-5 mb-5"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div>{facebook}</div>
                  <div>{twitter}</div>
                  <div>{google}</div>
                </div>

                <Text
                  category="p"
                  textContent="or sign up with"
                  lineHeight={20}
                  fontWeight={500}
                  fontSize={16}
                  style={{
                    textAlign: "center",
                    color: colors.light,
                    marginTop: "1.25rem",
                    marginBottom: "1.25rem"
                  }}
                />

                <div>
                  <div className="mb-5">
                    <FloppyInput
                      type="text"
                      bgColor="dark"
                      placeholder="Username"
                      success={true}
                      error={false}
                    />
                  </div>

                  <div className="mb-5">
                    <FloppyInput
                      type="text"
                      bgColor="dark"
                      placeholder="Name"
                      success={true}
                      error={false}
                    />
                  </div>

                  <div className="mb-5">
                    <FloppyInput
                      type="text"
                      bgColor="dark"
                      placeholder="email"
                      success={false}
                      error={true}
                    />
                  </div>

                  <div className="mb-5">
                    <FloppyInput
                      type="password"
                      bgColor="dark"
                      placeholder="Password"
                      success={true}
                      error={false}
                    />
                  </div>

                  <div className="mb-5">
                    <Button
                      title="Sign up"
                      color="primary"
                      textColor="light"
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AuthBoxInputs>
        </AuthBox>
      </section>
    );
  }
}

export default Register;
