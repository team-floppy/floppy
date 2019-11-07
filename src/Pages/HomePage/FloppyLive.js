import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { data } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";
import { Live, ellipse, arrowRight } from "../../Reusables/Icons";

function FloppyLive() {
  return (
    <div>
      <div className="flex">
        <div
          style={{
            height: "300px",
            width: "1000px",
            backgroundColor: colors.light,
            borderRadius: "20px"
          }}
        ></div>
        <span className="mt-32 ml-5">{ellipse}</span>
      </div>

      <div className="flex justify-between">
        <Text
          category="p"
          textContent="Upcoming Shows from D.I.E.T"
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
      <>
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
      </>
    </div>
  );
}

export default FloppyLive;
