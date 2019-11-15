import React, { Component } from "react";
import Dropzone from "react-dropzone";
import MainNavBar from "../../Components/Navigation/MainNavBar";
import colors from "../../Reusables/Colors";
import SideBar from "../../Components/Navigation/SideBar";
import StepWizard from "react-step-wizard";
import InnerHome from "./InnerHome";
import DiscoverPage from "./DiscoverPage";
import Card from "../../Components/Cards/Card";
import Text from "../../Components/Typography/Text";
import Avartar from "../../Components/Avatars/Avartar";
import Overlay from "../../Components/Overlays/Overlay";
import SetUpBox from "../../Components/Wrappers/SetUpBox";
import UserType from "../SetUpPages/UserType";
import UserChoice from "../SetUpPages/UserChoice";
import FloppyInput from "../../Components/Input/FloppyInput";
import FloppyButton from "../../Components/Buttons/FloppyButton";

import Comedians from "./Comedians";
import FloppyLive from "./FloppyLive";
import InnerComedians from "./InnerComedians";

const nav = {
   Comedians: <Comedians />,
  InnerHome: <InnerHome />,
  DiscoverPage: <DiscoverPage />,
  FloppyLive: <FloppyLive />,
  InnerComedians:<InnerComedians/>
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      isPopUp: true,
      isPost: false,
      isWhatNav: "InnerHome"
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

  handleOpenPost = () => {
    this.setState(prevState => ({
      isPost: !prevState.isPost
    }));
  };

  handlePageOpen = whatNav => {
    this.setState({ isWhatNav: whatNav });
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
              <SideBar
                open={this.state.open}
                handleOpenPost={this.handleOpenPost}
                handlePageOpen={this.handlePageOpen}
                active={this.state.isWhatNav}
              />
            </div>
            <div
              className="p-12"
              style={{
                width: this.state.open ? "85%" : "100%"
              }}
            >
              {nav[this.state.isWhatNav]}
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
          {this.state.isPost && (
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
                <div className="flex">
                  <Avartar
                    height={35}
                    width={35}
                    marginRight={20}
                    marginBottom={20}
                  />
                  <div
                    id="talkbubble"
                    style={{ width: "500px", height: "400px" }}
                  >
                    <div className="p-8 ">
                      <FloppyInput
                        type="input"
                        bgColor="dark"
                        placeholder="Post Title"
                        marginLeft={20}
                        height={30}
                        width={60}
                      />
                      <div
                        style={{
                          height: "200px",
                          backgroundColor: colors.dark,
                          borderRadius: "20px"
                        }}
                      >
                        <Dropzone
                          onDrop={acceptedFiles => console.log(acceptedFiles)}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div
                                style={{
                                  height: "200px",
                                  outline: "none"
                                }}
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <Text
                                  category="p"
                                  textContent="Drag and Drop Video here"
                                  lineHeight={20}
                                  fontWeight={500}
                                  fontSize={16}
                                  style={{
                                    color: colors.light,
                                    marginTop: 20,
                                    textAlign: "center",
                                    paddingTop: 75
                                  }}
                                />
                              </div>
                              <div className="mt-4">
                                <FloppyInput
                                  type="input"
                                  bgColor="dark"
                                  placeholder="#Tags"
                                  marginLeft={20}
                                  height={30}
                                  width={60}
                                />
                              </div>

                              <div className="flex mt-3 ml-1 justify-between">
                                <FloppyButton
                                  title="Cancel"
                                  borderColor="light"
                                  textColor="light"
                                  height={32}
                                  width={120}
                                  action={this.handleOpenPost}
                                />

                                <FloppyButton
                                  title="Post"
                                  borderColor="light"
                                  textColor="light"
                                  height={32}
                                  width={120}
                                />
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Overlay>
          )}
        </section>
      </>
    );
  }
}

export default Home;
