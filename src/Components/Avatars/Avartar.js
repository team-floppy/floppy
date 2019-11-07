import React from "react";
import colors from "../../Reusables/Colors";

function Avartar(props) {
  return (
    <>
      <div
        style={{
          width: props.width,
          height: props.height,
          borderRadius: "50%",
          backgroundColor: colors.primary,
          marginTop: props.marginTop,
          marginRight: props.marginRight,
          marginBottom: props.marginBottom
        }}
      ></div>
    </>
  );
}

const styles = {
  img: {
    width: 100,
    height: 100
  }
};
export default Avartar;
