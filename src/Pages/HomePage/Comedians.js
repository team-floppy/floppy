import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { data } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";
import { Live, ellipse, arrowRight } from "../../Reusables/Icons";
import FloppyButton from "../../Components/Buttons/FloppyButton";

function Comedians() {
  return (
    <div>
      <div
        style={{
          height: "300px",
          width: "1000px",
          backgroundColor: colors.dark,
          borderRadius: "20px"
        }}
      >
        <Text
          category="p"
          textContent="Followers"
          lineHeight={29}
          fontWeight={200}
          fontSize={15}
          style={{
            color: colors.light,
            marginBottom: 0,
            marginLeft: 40,
            paddingTop: 30
          }}
        />

        <Text
          category="p"
          textContent="1.9M"
          lineHeight={29}
          fontWeight={600}
          fontSize={24}
          style={{
            color: colors.light,
            marginBottom: 0,
            marginLeft: 45,
            paddingTop: 5
          }}
        />
        <div className="flex pt-24 ml-12 ">
          <Avartar width={20} height={20} marginRight={20} />
          <Text
            category="p"
            textContent="Comedian"
            lineHeight={29}
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.light
            }}
          />
        </div>
        <Text
          category="p"
          textContent="BasketMouth"
          lineHeight={29}
          fontWeight={600}
          fontSize={24}
          style={{
            color: colors.light,
            marginBottom: 0,
            marginLeft: 46,
            paddingTop: 5
          }}
        />
        <div className="flex justify-between">
          <Text
            category="p"
            textContent="@BasketMouth"
            lineHeight={29}
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.light,
              marginBottom: 0,
              marginLeft: 46,
              paddingTop: 5
            }}
          />
          <div className="flex justify-around  mr-10" style={{ width: "30%" }}>
            <FloppyButton
              title="Book"
              color="primary"
              textColor="darkX"
              height={32}
              width={120}
            />

            <FloppyButton
              title="Following"
              borderColor="primary"
              textColor="primary"
              height={32}
              width={120}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Text
          category="p"
          textContent="Upcoming Shows from BasketMouth"
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
            textContent="Popular Shows from BasketMouth"
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
            textContent="Suggestions From your most watched BasketMouth shows"
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

export default Comedians;
