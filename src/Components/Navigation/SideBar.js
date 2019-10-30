import React from "react";
import {
  home,
  briefCase,
  tv,
  userCheck,
  listBuger,
  cancel,
  DashBoard
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
          width: props.open ? "13%" : 0,
          height: "100%",
          // backgroundColor: "white",
          position: "fixed",
          borderRight: `1px solid ${props.open ? "#333333" : "transparent"}`,
          transition: "0.1s",
          overflowX: "hidden"
        }}
        className={`${props.open ? "pr-10" : ""}`}
      >
        <p className="flex pb-8">
          <span className="pr-2">{home}</span>
          <Text
            category="span"
            textContent="Home"
            lineHeight={59}
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.light
            }}
          />
        </p>
        <p className="flex pb-8">
          <span className="pr-2">{briefCase}</span>
          <Text
            category="span"
            textContent="Discovery"
            lineHeight={59}
            fontWeight={200}
            fontSize={15}
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
            fontWeight={200}
            fontSize={15}
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
            fontWeight={200}
            fontSize={15}
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
            fontWeight={200}
            fontSize={15}
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
            fontWeight={200}
            fontSize={15}
            style={{
              color: colors.light
            }}
          />
        </p>

        <div style={styles.line}>
          <hr />
        </div>

        <div className="pt-10">
          <FloppyButton
            title="Create post"
            color="primary"
            textColor="light"
            height={38}
            width={150}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  iconColor: {
    color: colors.light
  },

  line: {
    border: "5px red",
    width: 160
  }
};

export default SideBar;
