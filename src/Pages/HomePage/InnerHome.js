import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { dataTwo } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";
import SubCardDisplay from "../../Components/Wrappers/SubCardDisplay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1800, min: 1000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1400, min: 1004 },
    items: 4.3
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

function innerHome() {
  return (
    <div className="px-10">
      <div className='flex'>
      <Text
        category="p"
        textContent="Recommended"
        lineHeight={29}
        fontWeight={600}
        fontSize={24}
        style={{
          color: colors.light,
          marginBottom: 30,
          marginTop: 0
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
            marginBottom: 20,
            marginLeft:650
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

      <Text
        category="p"
        textContent="Comedians"
        lineHeight={29}
        fontWeight={600}
        fontSize={24}
        style={{
          color: colors.light,
          marginTop: 80
        }}
      />
      <Carousel responsive={responsive}>
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
      </Carousel>
      <Text
        category="p"
        textContent="Popular Sites"
        lineHeight={29}
        fontWeight={600}
        fontSize={24}
        style={{
          color: colors.light,
          marginBottom: 20,
          marginTop: 40
        }}
      />

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
  );
}

export default innerHome;
