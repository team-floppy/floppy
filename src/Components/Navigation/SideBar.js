import React from "react";
import {
  home,
  briefCase,
  Tv,
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
import { isMobile } from "react-device-detect";

function SideBar(props) {
  return (
    <>
      <div
        style={{
          maxWidth: "20%",
          width: props.open && !isMobile ? "15%" : 0,

          height: "100vh",
          // backgroundColor: "white",
          position: "fixed",
          borderRight: `1px solid ${props.open ? "#333333" : "transparent"}`,
          transition: "0.1s",
          overflowX: "hidden",
          marginTop: 50
        }}
        className={`${props.open ? "pr-1" : ""}`}
      >
        <div>
          {/* {Clicker} */}
          <p
            className="flex pb-8 cursor-pointer"
            onClick={() => props.handlePageOpen("InnerHome")}
          >
            <span className="pr-2 flex">
              <div>{home}</div>
            </span>
            <Text
              category="span"
              textContent="Home"
              lineHeight={59}
              fontWeight={props.active == "InnerHome" ? false : 900}
              fontSize={props.active == "InnerHome" ? 15 : 11}
              style={{
                color:
                  props.active == "InnerHome" ? colors.primary : colors.light
              }}
            />
          </p>
        </div>
        <p
          className="flex pb-8 cursor-pointer"
          onClick={() => props.handlePageOpen("DiscoverPage")}
        >
          <span className="pr-2">{briefCase}</span>
          <Text
            category="span"
            textContent="Discovery"
            lineHeight={59}
            fontWeight={props.active == "DiscoverPage" ? false : 900}
            fontSize={props.active == "DiscoverPage" ? 15 : 11}
            style={{
              color:
                props.active == "DiscoverPage" ? colors.primary : colors.light
            }}
          />
        </p>
        <p
          className="flex pb-8 cursor-pointer"
          onClick={() => props.handlePageOpen("FloppyLive")}
        >
          <span className="pr-2">
            <Tv isActive={props.active == "FloppyLive" ? true : false} />
          </span>
          <Text
            category="span"
            textContent="FloppyLive"
            lineHeight={59}
            fontWeight={props.active == "FloppyLive" ? false : 900}
            fontSize={props.active == "FloppyLive" ? 15 : 11}
            style={{
              color:
                props.active == "FloppyLive" ? colors.primary : colors.light
            }}
          />
        </p>
        <p
          className="flex pb-8 cursor-pointer"
          onClick={() => props.handlePageOpen("Comedians")}
        >
          <span className="pr-2">{userCheck}</span>
          <Text
            category="span"
            textContent="Comedians"
            lineHeight={59}
            fontWeight={props.active == "Comedians" ? false : 900}
            fontSize={props.active == "Comedians" ? 15 : 11}
            style={{
              color: props.active == "Comedians" ? colors.primary : colors.light
            }}
          />
        </p>
        <p className="flex pb-8 cursor-pointer">
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

        <div className="pb-24 mr-12">
          <FloppyButton
            title="Create Skit"
            color="primary"
            textColor="light"
            height={36}
            width={120}
            action={props.handleOpenPost}
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
