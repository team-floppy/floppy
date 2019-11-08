import React from "react";
import {
  home,
  briefCase,
  tv,
  userCheck,
  listBuger,
  cancel,
  DashBoard,
  line,
  arrowUp,
  favourites,
  watchLater,
  Clicker
} from "../../Reusables/Icons";
import colors from "../../Reusables/Colors";
import Text from "../Typography/Text";
import FloppyButton from "../Buttons/FloppyButton";

function SideBar(props) {
  return (
    <>
      <div
        style={{
          maxWidth: "20%",
          width: props.open ? "15%" : 0,
          height: "100vh",
          // backgroundColor: "white",
          position: "fixed",
          borderRight: `1px solid ${props.open ? "#333333" : "transparent"}`,
          transition: "0.1s",
          overflowX: "hidden",
          marginTop: 50
        }}
        className={`${props.open ? "pr-10" : ""}`}
      >
        <div className="flex">
          {/* {Clicker} */}
          <p className="flex pb-8">
            <span className="pr-2 flex">
              <div>{home}</div>
            </span>
            <Text
              category="span"
              textContent="Home"
              lineHeight={59}
              fontWeight={600}
              fontSize={11}
              style={{
                color: colors.light
              }}
            />
          </p>
        </div>
        <p className="flex pb-8">
          <span className="pr-2">{briefCase}</span>
          <Text
            category="span"
            textContent="Discovery"
            lineHeight={59}
            fontWeight={600}
            fontSize={11}
            style={{
              color: colors.light
            }}
          />
        </p>
        <p className="flex pb-8">
          <span className="pr-2">{tv}</span>
          <Text
            category="span"
            textContent="FloppyLive"
            lineHeight={59}
            fontWeight={600}
            fontSize={11}
            style={{
              color: colors.light
            }}
          />
        </p>
        <p className="flex pb-8">
          <span className="pr-2">{userCheck}</span>
          <Text
            category="span"
            textContent="Comedians"
            lineHeight={59}
            fontWeight={600}
            fontSize={11}
            style={{
              color: colors.light
            }}
          />
        </p>
        <p className="flex pb-8">
          <span className="pr-2">{listBuger}</span>
          <Text
            category="span"
            textContent="Categories"
            lineHeight={59}
            fontWeight={600}
            fontSize={11}
            style={{
              color: colors.light
            }}
          />
        </p>
        <p className="flex pb-8">
          <span className="pr-2">{DashBoard}</span>
          <Text
            category="span"
            textContent="Analytics"
            lineHeight={59}
            fontWeight={600}
            fontSize={11}
            style={{
              color: colors.light
            }}
          />
        </p>

        <div className="mb-2">
          <span>{line}</span>
        </div>

        <p className="flex pb-6 pt-5">
          <span className="pr-2">{arrowUp}</span>
          <Text
            category="span"
            textContent="Your Post"
            lineHeight={59}
            fontWeight={600}
            fontSize={10}
            style={{
              color: colors.light
            }}
          />
        </p>

        <p className="flex pb-6">
          <span className="pr-2">{favourites}</span>
          <Text
            category="span"
            textContent="Favourites"
            lineHeight={59}
            fontWeight={600}
            fontSize={10}
            style={{
              color: colors.light
            }}
          />
        </p>

        <p className="flex pb-6">
          <span className="pr-2">{watchLater}</span>
          <Text
            category="span"
            textContent="Watch Later"
            lineHeight={59}
            fontWeight={600}
            fontSize={10}
            style={{
              color: colors.light
            }}
          />
        </p>

        <div className="pb-28 mr-12">
          <FloppyButton
            title="Create post"
            color="primary"
            textColor="light"
            height={36}
            width={120}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  iconColor: {
    color: colors.light
  }
};

export default SideBar;
