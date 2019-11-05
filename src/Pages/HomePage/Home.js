import React, { Component } from "react";
import MainNavBar from "../../Components/Navigation/MainNavBar";
import colors from "../../Reusables/Colors";
import SideBar from "../../Components/Navigation/SideBar";

import InnerHome from "./InnerHome";
import DiscoverPage from "./DiscoverPage";

import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import Overlay from "../../Components/Overlays/Overlay";
import SetUpBox from "../../Components/Wrappers/SetUpBox";
import UserType from "../SetUpPages/UserType";
import UserChoice from "../SetUpPages/UserChoice";


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      isPopUp: true
    };
  }

  handleNavOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleOpenPopUp = isWhat => {
    this.setState(prevState => ({
      isPopUp: !prevState.isPopUp
    }));
  };

  render() {
    return (
      <>
        <section
          style={{
            backgroundColor: colors.darkX,
            height: "auto",
            width: "100%"
          }}
        >
          <MainNavBar handleNavOpen={this.handleNavOpen} />
          <div
            className=" mt-20 ml-10 flex justify-between"
            style={{ height: "auto" }}
          >
            <div>
              <SideBar open={this.state.open} />
            </div>
            <div
              className="p-12"
              style={{
                width: this.state.open ? "85%" : "100%"
              }}
            >
              {/* <InnerHome /> */}
              <DiscoverPage />
            </div>
          </div>

          {this.state.isPopUp && (
            <Overlay>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  fontSize: 50,
                  transform: "translate(-50%,-50%)"
                }}
              >
                <StepWizard>
                  <UserType />
                  <UserChoice handleOpenPopUp={this.handleOpenPopUp} />
                </StepWizard>
              </div>
            </Overlay>
          )}
        </section>
      </>
    );
  }
}

export default Home;
