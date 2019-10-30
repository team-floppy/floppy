import React from "react";
import colors from "../../Reusables/Colors";

function Avartar() {
  return (
    <>
      <div style={styles.wrapper}>
        <h1></h1>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: colors.primary
  },

  img: {
    width: 100,
    height: 100
  }
};
export default Avartar;
