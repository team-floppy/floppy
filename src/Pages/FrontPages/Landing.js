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
import { facebook, twitter, google, Footer } from "../../Reusables/Socials";
import FloppyInput from "../../Components/Input/FloppyInput";
import Signup from "../../Components/Auths/Signup";
import Signin from "../../Components/Auths/Signin";

class Landing extends Component {
  state = {
    isPopUp: false,
    isSignUp: false,
    isSignIn: false
  };

  handleOpenPopUp = isWhat => {
    if (isWhat == "isSignUp") {
      this.setState({ isSignIn: false, isSignUp: true });
    } else {
      this.setState({ isSignIn: true, isSignUp: false });
    }
    this.setState(prevState => ({
      isPopUp: !prevState.isPopUp
    }));
  };

  handleOpenPopUpSwitch = isWhat => {
    if (isWhat == "isSignUp") {
      this.setState({ isSignIn: false, isSignUp: true });
    } else {
      this.setState({ isSignIn: true, isSignUp: false });
    }
  };

  render() {
    return (
      <section style={{ height: "100vh" }}>
        {/* Section for the hero */}
        <div
          className="flex-grow bg-fixed  bg-center bg-no-repeat bg-cover"
          style={styles.heroContainer}
        >
          <div className="container mx-auto px-10 py-5 pt-10">
            <LandingNavBar handleOpenPopUp={this.handleOpenPopUp} />

            <div className="mt-40">
              <div>
                <HeroText />
              </div>
              <div style={{ width: isMobile ? "auto" : 534 }}>
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
              <div className="md:mr-10 ">
                <FloppyButton
                  title="Join now"
                  color="primary"
                  textColor="darkX"
                  height={38}
                  width={200}
                  style={{ marginTop: 40 }}
                  action={() => this.handleOpenPopUp("isSignUp")}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of hero section */}
        {/* Start of main content */}
        <div
          style={{ height: "auto", backgroundColor: colors.darkX }}
          className="pt-10 pb-20"
        >
          <div
            className={`container  mx-auto ${isMobile ? "px-5" : "px-10"}
             py-5`}
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
        </div>
        {/* End of main content  */}

        {this.state.isPopUp && (
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
              {this.state.isSignUp && (
                <Signup
                  handleOpenPopUp={this.handleOpenPopUp}
                  handleOpenPopUpSwitch={this.handleOpenPopUpSwitch}
                />
              )}
              {this.state.isSignIn && (
                <Signin
                  handleOpenPopUp={this.handleOpenPopUp}
                  handleOpenPopUpSwitch={this.handleOpenPopUpSwitch}
                  history={this.props.history}
                />
              )}
            </div>
          </Overlay>
        )}
        <div
          className={`flex justify-between flex-wrap  ${
            isMobile ? "px-10" : "px-16"
          } ${isMobile ? "py-10" : "py-20"}`}
          style={{ width: "100%", height: "100vh", background: colors.primary }}
        >
          <div className="flex-auto">
            <div style={{ width: "407px", height: "88px" }}>
              <Text
                category="p"
                textContent="Share your craft with millions."
                lineHeight={20}
                fontSize={30}
                style={{
                  color: colors.darkX,
                  fontWeight: " bolder",
                  marginTop: 20,
                  marginBottom: 20
                }}
              />
              <FloppyButton
                title="Join now"
                borderColor="darkX"
                textColor="darkX"
                height={38}
                width={157}
                action={() => this.handleOpenPopUp("isSignUp")}
              />
            </div>
          </div>
          <div className=" flex-auto  ">
            <Footer />
          </div>
        </div>
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
