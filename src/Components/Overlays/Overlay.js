import React from "react";

const Overlay = props => {
  return <div style={styles.overlay}>{props.children}</div>;
};

const styles = {
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.70)",
    backdropFilter: "blur(8px)",
    zIndex: 2,
    cursor: "pointer"
  }
};

export default Overlay;
