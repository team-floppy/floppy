import React, { Component } from "react";
import MainNavBar from "../../Components/Navigation/MainNavBar";
import colors from "../../Reusables/Colors";
import SideBar from "../../Components/Navigation/SideBar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  handleNavOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <>
        <section
          className="pt-10"
          style={{
            backgroundColor: colors.darkX,
            height: "100vh",
            width: "100%",
            position: "fixed"
          }}
        >
          <MainNavBar handleNavOpen={this.handleNavOpen} />
          <div
            className=" mt-20 ml-10 flex justify-between"
            style={{ height: "100vh" }}
          >
            <div>
              <SideBar open={this.state.open} />
            </div>
            <div style={{ width: this.state.open ? "85%" : "100%" }}>
              Hello world
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
