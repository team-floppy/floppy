import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { data } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";

function innerHome() {
  return (
    <div>
      <Text
        category="p"
        textContent="Recommended"
        lineHeight={29}
        fontWeight={600}
        fontSize={24}
        style={{
          color: colors.light,
          marginBottom: 20,
          marginTop: 0
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
      <CardDisplay>
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
        <Avartar width={200} height={200} marginTop={20} />
      </CardDisplay>

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
    </div>
  );
}

export default innerHome;
