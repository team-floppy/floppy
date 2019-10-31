import React, { Component } from "react";
import LandingNavBar from "../../Components/Navigation/LandingNavBar";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import { HeroText, Close } from "../../Reusables/Icons";
import FloppyButton from "../../Components/Buttons/FloppyButton";
import Card from "../../Components/Cards/Card";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { data, events } from "../../Examples/MockData";
import Overlay from "../../Components/Overlays/Overlay";
import { isMobile } from "react-device-detect";
import AuthBox from "../../Components/Wrappers/AuthBox";
import AuthBoxHero from "../../Components/Wrappers/AuthBoxHero";
import AuthBoxInputs from "../../Components/Wrappers/AuthBoxInputs";
import { facebook, twitter, google } from "../../Reusables/Socials";
import FloppyInput from "../../Components/Input/FloppyInput";

class Landing extends Component {
  render() {
    return (
      <section style={{ width: "100%", height: "100vh" }}>
        {/* Section for the hero */}
        <div
          className="flex-grow bg-fixed  bg-center bg-no-repeat bg-cover"
          style={styles.heroContainer}
        >
          <LandingNavBar />

          <div className="mt-48 ml-20 ">
            <div>
              <HeroText />
            </div>
            <div style={{ width: 534 }}>
              <Text
                category="p"
                textContent="Kill the boredom and get filled with life and laughter. 
              Enjoy your Live shows, cracks and memes."
                lineHeight={20}
                fontWeight={500}
                fontSize={16}
                style={{
                  color: colors.light,
                  marginTop: 20
                }}
              />
            </div>
            <div className="mr-10 ">
              <FloppyButton
                title="Join now"
                color="primary"
                textColor="light"
                height={38}
                width={200}
                style={{ marginTop: 40 }}
              />
            </div>
          </div>
        </div>
        {/* End of hero section */}

        {/* Start of main content */}
        <div
          className="p-10"
          style={{ height: "auto", backgroundColor: colors.darkX }}
        >
          <Text
            category="p"
            textContent="Popular"
            lineHeight={44}
            fontWeight={500}
            fontSize={25}
            style={{
              color: colors.light,
              marginBottom: 20
            }}
          />

          <CardDisplay>
            {data.map((comedy, i) => (
              <Card
                key={i}
                thumbnail={comedy.thumbnail}
                static={comedy.static}
                title={comedy.title}
                views={comedy.views}
                username={comedy.username}
              />
            ))}
          </CardDisplay>
          <div className="pt-10">
            <Text
              category="p"
              textContent="Upcoming Live Shows"
              lineHeight={44}
              fontWeight={500}
              fontSize={25}
              style={{
                color: colors.light,

                marginBottom: 20
              }}
            />
          </div>
          <CardDisplay>
            {events.map((event, i) => (
              <Card
                key={i}
                event={true}
                static={event.static}
                title={event.title}
                views={event.views}
                username={event.username}
              />
            ))}
          </CardDisplay>
        </div>
        {/* End of main content  */}
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
            <AuthBox>
              <AuthBoxHero image="https://images.pexels.com/photos/476/man-person-red-white.jpg?cs=srgb&dl=artist-circus-clown-476.jpg&fm=jpg">
                <h1>Hello</h1>
              </AuthBoxHero>
              <AuthBoxInputs>
                <div className="flex justify-end pr-5 pt-3">
                  <Close />
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
                        color: colors.light
                      }}
                    />

                    <div>
                      <FloppyInput
                        type="text"
                        bgColor="dark"
                        placeholder="Username"
                        success={true}
                        error={false}
                      />

                      <FloppyInput
                        type="text"
                        bgColor="dark"
                        placeholder="Name"
                        success={true}
                        error={false}
                      />

                      <FloppyInput
                        type="text"
                        bgColor="dark"
                        placeholder="email"
                        success={false}
                        error={true}
                      />

                      <FloppyInput
                        type="password"
                        bgColor="dark"
                        placeholder="Password"
                        success={true}
                        error={false}
                      />

                      <FloppyButton
                        title="Sign up"
                        color="primary"
                        textColor="light"
                        height={41}
                      />
                    </div>
                  </div>
                </div>
              </AuthBoxInputs>
            </AuthBox>
          </div>
        </Overlay>
      </section>
    );
  }
}

const styles = {
  heroContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(33, 33, 33, 0.70),rgba(33, 33, 33, 0.70)),url(https://res.cloudinary.com/dus4sijdt/image/upload/v1572156293/ezgif.com-optimize_enq4qf.gif)  `
  }
};

export default Landing;
