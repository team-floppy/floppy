import React from "react";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import { dataTwo } from "../../Examples/MockData";
import colors from "../../Reusables/Colors";
import { Live, ellipse, arrowRight } from "../../Reusables/Icons";
import FloppyButton from "../../Components/Buttons/FloppyButton";
import Overlay from "../../Components/Overlays/Overlay";
import FloppyInput from "../../Components/Input/FloppyInput";
import Dropzone from "react-dropzone";
import SubCardDisplay from "../../Components/Wrappers/SubCardDisplay";

function Comedians() {
  return (
    <div className="px-10">
      <div
        style={{
          height: "300px",
          width: "930px",
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
          <div
            className="flex justify-around  mr-10 pb-10"
            style={{ width: "30%" }}
          >
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
      <div className="pt-5">
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
      </>
      
      {/* <Overlay>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            fontSize: 50,
            transform: "translate(-50%,-50%)"
          }}
        >
          <div className="flex p-10 ">
            <div className="pr-1">
              <Avartar
                height={40}
                width={40}
                marginRight={20}
                marginBottom={20}
              />
            </div>
            <div id="talkbubble" style={{ width: "500px", height: "400px" }}>
              <div className="p-4 ">
                <Text
                  category="p"
                  textContent="Send an Inquiry to BasketMouth"
                  lineHeight={20}
                  fontWeight={500}
                  fontSize={16}
                  style={{
                    color: colors.light,
                    textAlign: "center"
                  }}
                />
                <div className="mt-4 mb-5">
                  <FloppyInput
                    type="input"
                    bgColor="dark"
                    placeholder="Work Type"
                    color="colors.light"
                    marginLeft={20}
                    height={30}
                    width={60}
                  />
                </div>

                <div className="mt-2 ml-2 rounded-lg">
                  <textarea
                    rows="3"
                    style={{
                      backgroundColor: colors.dark,
                      color: "#9e9e9e",
                      padding: 12,
                      outline: "none",
                      fontSize: "15px",
                      height: "230px",
                      width: "100%"
                    }}
                  >
                    Description...
                  </textarea>
                </div>

                <div className="flex ml-1 justify-between ">
                  <FloppyButton
                    title="Cancel"
                    borderColor="light"
                    textColor="light"
                    height={30}
                    width={120}
                  />

                  <FloppyButton
                    title="Post"
                    borderColor="light"
                    textColor="light"
                    height={30}
                    width={120}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Overlay> */}
    </div>
  );
}

export default Comedians;
