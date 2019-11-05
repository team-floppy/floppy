import React, { Component } from "react";
import MainNavBar from "../../Components/Navigation/MainNavBar";
import colors from "../../Reusables/Colors";
import SideBar from "../../Components/Navigation/SideBar";

import InnerHome from "./InnerHome";
import DiscoverPage from "./DiscoverPage";

import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";


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

  componentDidMount() {
    // window.onscroll = fire;
    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;
    // function fire() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.style.top = 0;
    //   } else {
    //     console.log("he");
    //   }
    // }
  }

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
        </section>
      </>
    );
  }
}

export default Home;
