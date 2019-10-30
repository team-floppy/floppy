import React, { Component } from "react";
import LandingNavBar from "../../Components/Navigation/LandingNavBar";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import { HeroText } from "../../Reusables/Icons";
import FloppyButton from "../../Components/Buttons/FloppyButton";
import Card from "../../Components/Cards.js/Card";

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
          className="p-10 pl-20"
          style={{ height: "100%", backgroundColor: colors.darkX }}
        >
          <Text
            category="p"
            textContent="Popular"
            lineHeight={44}
            fontWeight={500}
            fontSize={36}
            style={{
              color: colors.light,
              marginBottom: 20
            }}
          />

          <Card />
        </div>
        {/* End of main content  */}
      </section>
    );
  }
}

const styles = {
  heroContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(33, 33, 33, 0.41),rgba(33, 33, 33, 0.41)),url(https://res.cloudinary.com/dus4sijdt/image/upload/v1572156293/ezgif.com-optimize_enq4qf.gif)  `
  }
};

export default Landing;
