import React, { Component } from "react";
import MainNavBar from "../../Components/Navigation/MainNavBar";
import colors from "../../Reusables/Colors";
import SideBar from "../../Components/Navigation/SideBar";
import Card from "../../Components/Cards.js/Card";
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
            <div style={{ width: this.state.open ? "85%" : "100%" }}>
              <Text
                category="p"
                textContent="Recommended"
                lineHeight={29}
                fontWeight={600}
                fontSize={24}
                style={{
                  color: colors.light,
                  marginBottom: 20,
                  marginTop: 50
                }}
              />
              <Card />
              <div>
                <Text
                  category="p"
                  textContent="Comedians"
                  lineHeight={29}
                  fontWeight={600}
                  fontSize={24}
                  style={{
                    color: colors.light,
                    marginTop: 280
                  }}
                />

                <Avartar
                  width={200}
                  height={200}
                  marginTop={50}
                  // marginLeft={100}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;