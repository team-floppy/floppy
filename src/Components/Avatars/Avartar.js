import React from "react";
import colors from "../../Reusables/Colors";

function Avartar(props) {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${props.img})  `,
          width: props.width,
          height: props.height,
          borderRadius: "50%",
          backgroundColor: colors.primary,
          marginTop: props.marginTop,
          marginRight: props.marginRight,
          marginBottom: props.marginBottom,
          marginLeft: props.marginLeft,
          paddingTop: props.paddingTop
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
