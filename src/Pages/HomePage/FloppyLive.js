import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { dataTwo } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";
import { Live, ellipse, arrowRight } from "../../Reusables/Icons";
import SubCardDisplay from "../../Components/Wrappers/SubCardDisplay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 1.1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function FloppyLive() {
  return (
    <div className="px-10">
      <Carousel responsive={responsive}>
        <div
          className="  bg-no-repeat bg-cover"
          style={{
            height: "300px",
            width: "800px",
            backgroundColor: colors.light,
            borderRadius: "20px",
            backgroundImage: `url(https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)`
          }}
        ></div>

        <div
          className="  bg-no-repeat bg-cover"
          style={{
            height: "300px",
            width: "800px",
            backgroundColor: colors.light,
            borderRadius: "20px",
            backgroundImage: `url("https://images.pexels.com/photos/2337779/pexels-photo-2337779.jpeg?cs=srgb&dl=art-balloons-birthday-2337779.jpg&fm=jpg")`
          }}
        ></div>
        <div
          className="  bg-no-repeat bg-cover"
          style={{
            height: "300px",
            width: "800px",
            backgroundColor: colors.light,
            borderRadius: "20px",
            backgroundImage: `url(https://images.pexels.com/photos/3025096/pexels-photo-3025096.jpeg?cs=srgb&dl=audience-celebration-concert-3025096.jpg&fm=jpg)`
          }}
        ></div>
      </Carousel>

      <div className="flex justify-between  ">
        <Text
          category="p"
          textContent="Upcoming Shows from D.I.E.T"
          lineHeight={29}
          fontWeight={600}
          fontSize={24}
          style={{
            color: colors.light,
            marginBottom: 15,
            marginTop: 80
          }}
        />

        <Text
          category="p"
          textContent="See more"
          lineHeight={29}
          fontWeight={200}
          fontSize={15}
          style={{
            color: colors.primary,
            marginBottom: 15,
            marginTop: 80
          }}
        />
      </div>

      <div className="pt-5 ">
        <SubCardDisplay>
          {dataTwo.map((comedy, i) => (
            <Card
              key={i}
              thumbnail={comedy.thumbnail}
              static={comedy.static}
              title={comedy.title}
              views={comedy.views}
              username={comedy.username}
            />
          ))}
        </SubCardDisplay>
      </div>
      <div className="pt-5 ">
        <div className="flex justify-between">
          <Text
            category="p"
            textContent="Previous Shows from D.I.E.T"
            lineHeight={29}
            fontWeight={600}
            fontSize={24}
            style={{
              color: colors.light,
              marginBottom: 30,
              marginTop: 30
            }}
          />

          <Text
            category="p"
            textContent="See more"
            lineHeight={29}
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.primary,
              marginBottom: 30,
              marginTop: 30
            }}
          />
        </div>
        <SubCardDisplay>
          {dataTwo.map((comedy, i) => (
            <Card
              key={i}
              thumbnail={comedy.thumbnail}
              static={comedy.static}
              title={comedy.title}
              views={comedy.views}
              username={comedy.username}
            />
          ))}
        </SubCardDisplay>
        <div className="flex justify-between">
          <Text
            category="p"
            textContent="Suggestions From your most watched D.I.E.T shows"
            lineHeight={29}
            fontWeight={600}
            fontSize={24}
            style={{
              color: colors.light,
              marginBottom: 30,
              marginTop: 30
            }}
          />

          <Text
            category="p"
            textContent="See more"
            lineHeight={29}
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.primary,
              marginBottom: 30,
              marginTop: 30
            }}
          />
        </div>

        <SubCardDisplay>
          {dataTwo.map((comedy, i) => (
            <Card
              key={i}
              thumbnail={comedy.thumbnail}
              static={comedy.static}
              title={comedy.title}
              views={comedy.views}
              username={comedy.username}
            />
          ))}
        </SubCardDisplay>
      </div>
    </div>
  );
}

export default FloppyLive;
