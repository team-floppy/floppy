import React from "react";
import Logo from "../../Reusables/Logo";
import colors from "../../Reusables/Colors";
import Avartar from "../Avatars/Avartar";
import FloppyInput from "../Input/FloppyInput";
import {
  handBuger,
  search,
  message,
  bell,
  chevron
} from "../../Reusables/Icons";

function MainNavBar(props) {
  return (
    <>
      <div className="pb-4 pt-4" style={styles.body} id="navbar">
        <div className="flex justify-center">
          <span className="pt-4 pl-10 pr-3" onClick={props.handleNavOpen}>
            {handBuger}
          </span>
          <span>{Logo}</span>
        </div>
        <div>
          <FloppyInput
            type="search"
            bgColor="dark"
            placeholder="Search"
            search={true}
            height={35}
            width={500}
          />
        </div>
        <div className="flex justify-center">
          <span className="justify-between pt-3 pr-10">{message}</span>
          <span className="pt-3 pr-10">{bell}</span>
          <span className="pt-3">
            <Avartar height={25} width={25} />
          </span>
          <span className="pr-10 pt-3">{chevron}</span>
        </div>
      </div>
    </>
  );
}

const styles = {
  body: {
    backgroundColor: colors.darkX,
    width: "100%",
    display: "flex",
    marginRight: 100,
    top: 0,
    justifyContent: "space-between",
    position: "fixed"
  }
};
export default MainNavBar;
