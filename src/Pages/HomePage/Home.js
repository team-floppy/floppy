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
import axios from "axios";
import ProgressBar from "react-progressbar";
import Comedians from "./Comedians";
import FloppyLive from "./FloppyLive";

const nav = {
  Comedians: <Comedians />,
  InnerHome: <InnerHome />,
  DiscoverPage: <DiscoverPage />,
  FloppyLive: <FloppyLive />,
  Comedians: <Comedians />
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      isPopUp: true,
      isPost: false,
      dragText: "Drag and Drop Video here",
      isWhatNav: "InnerHome",
      fileName: "",
      video: {},
      videoTags: "",
      progress: 0,
      isAuthing: false,
      isWhatNav: "InnerHome",
      dontShow: false
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

  // onChange = e => {
  //   if (e.target.name.startsWith("video")) {
  //     this.setState({ [e.target.name]: e.target.file[0] });
  //   } else {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }
  // };

  onSubmit = e => {
    e.preventDefault();

    const { postTitle, file, videoTags } = this.state;
    var formdata = new FormData();
    formdata.append("video", this.state.video);
    formdata.append("fileName", this.state.fileName);
    formdata.append("videoTags", this.state.videoTags);
    console.log(this.state.video);
    // Object.keys(this.state).map(key => {
    //   if (key.startsWith("video")) {
    //     formdata.append("video", this.state[key]);
    //   } else {
    //     formdata.append(key, this.state[key]);
    //   }
    // });
    console.log(this.state);
    axios.post("http://localhost:8080/api/video/upload/video", formdata, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGlxYWppbXVzdGFwaGFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYWRlZXFhamkiLCJpZCI6IjVkYmFiZGZlOGU3ZGI4NTIxYmYzNGVkYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTcyNTMzODc5LCJleHAiOjE1NzMxMzg2Nzl9.XMEvRXumapUf_66CrBCEqQ8EvbH4XWXppjGt0bzqDsg"
      },
      onUploadProgress: progress => {
        const { loaded, total } = progress;
        this.setState({ progress: Math.round((loaded / total) * 100) });
        console.log(this.state.progress);
      }
    });
  };

  render() {
    const divStyle = {
      margin: "60px"
    };
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
                        action={e =>
                          this.setState({ fileName: e.target.value })
                        }
                        type="fileName"
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
                          type="file"
                          onDrop={video =>
                            this.setState({
                              video: video[0],
                              dragText: video[0].na
                            })
                          }
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
                                  textContent={this.state.dragText}
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
                                {this.state.progress !== 0 && this.state.progress !== 100 && (
                                  <>
                                    <p
                                      style={{
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        color: "#BDBDBD",
                                        fontSize: "24px",
                                        fontWeight: "600"
                                      }}
                                    >
                                      uploading
                                    </p>
                                    <p
                                      style={{
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        color: "#BDBDBD",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "bold"
                                      }}
                                    >
                                      {this.state.progress}/100
                                    </p>
                                    <ProgressBar
                                      completed={this.state.progress}
                                      color="#FFA000"
                                      style={{
                                        margin: "15px",
                                        borderRadius: "10px"
                                      }}
                                    />
                                  </>
                                ) }
                                {this.state.progress === 100 && this.state.progress !== 0 && (
                                  <>
                                    <p
                                      style={{
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                        color: "#BDBDBD",
                                        fontSize: "24px"
                                      }}
                                    >
                                      Uploaded
                                    </p>
                                  </>
                                )}
                              </div>
                              <div className="mt-4">
                                <FloppyInput
                                  action={e =>
                                    this.setState({ videoTags: e.target.value })
                                  }
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
                                  action={this.onSubmit}
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
