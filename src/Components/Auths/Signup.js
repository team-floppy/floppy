import React from "react";
import { connect } from "react-redux";
import AuthBox from "../Wrappers/AuthBox";
import FloppyInput from "../Input/FloppyInput";
import FloppyButton from "../Buttons/FloppyButton";
import { Close } from "../../Reusables/Icons";
import colors from "../../Reusables/Colors";
import { facebook, twitter, google } from "../../Reusables/Socials";
import { RegisterUser } from "../../Actions/Auth";
import Text from "../Typography/Text";
import AuthBoxInputs from "../Wrappers/AuthBoxInputs";
import Loader from "../../imgs/loader.gif";
import FloppyModal from "../Modal/FloppyModal";
class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    modalMessage: "",
    open: false,
    isAuthing: false
  };
  handleSubmit = () => {
    const { name, username, email, password } = this.state;

    if (name === "" || username === "" || email === "" || password === "") {
      alert("Empty");
      return;
    }

    this.setState({ isAuthing: true });
    this.props
      .userRegister({
        name,
        username,
        email,
        password
      })
      .then(data => {
        console.log(data)
        this.setState({
          isAuthing: false,
          open: true,
          modalMessage: data.message
        });
      })
      .catch(error => {
        this.setState({
          isAuthing: false,
          open: true,
          modalMessage: error.message
        });
      });
  };

  onCloseModal = () => {
    this.setState({ open: false }, () => {
      this.props.handleOpenPopUpSwitch();
    });
  };
  render() {
    const { isAuthing, open } = this.state;
    return (
      <div>
        <AuthBox>
          {isAuthing ? (
            <div className="flex justify-center items-center h-full">
              <img src={Loader} width="200" height="200" />
            </div>
          ) : (
            <AuthBoxInputs>
              <div
                className="flex justify-end"
                style={{ position: "absolute", left: "7.3em", top: 15 }}
              >
                <span onClick={this.props.handleOpenPopUp}>
                  <Close />
                </span>
              </div>

              <div className="flex justify-center pt-10">
                <div>
                  <Text
                    category="p"
                    textContent="Create Account"
                    lineHeight={59}
                    fontWeight={600}
                    fontSize={30}
                    style={{
                      textAlign: "center",
                      color: colors.primary,
                      marginBottom: 15
                    }}
                  />

                  <div
                    className="flex pb-3"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <div>{facebook}</div>
                    <div>{twitter}</div>
                    <div>{google}</div>
                  </div>

                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      color: colors.light
                    }}
                  >
                    or
                  </p>

                  <div>
                    <div className="pb-3 pt-5">
                      <FloppyInput
                        type="text"
                        bgColor="dark"
                        placeholder="Username"
                        width={281}
                        height={28}
                        action={e =>
                          this.setState({ username: e.target.value })
                        }
                      />
                    </div>

                    <div className="pb-3">
                      <FloppyInput
                        type="text"
                        bgColor="dark"
                        placeholder="Name"
                        success={true}
                        error={false}
                        width={281}
                        height={28}
                        action={e => this.setState({ name: e.target.value })}
                      />
                    </div>

                    <div className="pb-3">
                      <FloppyInput
                        type="email"
                        bgColor="dark"
                        placeholder="Email"
                        success={false}
                        error={true}
                        width={281}
                        height={28}
                        action={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div>
                      <FloppyInput
                        type="password"
                        bgColor="dark"
                        placeholder="Password"
                        success={true}
                        error={false}
                        width={281}
                        height={28}
                        action={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>

                    <FloppyButton
                      title="Sign Up"
                      color="primary"
                      textColor="darkx"
                      height={41}
                      action={this.handleSubmit}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <span
                      onClick={this.props.handleOpenPopUpSwitch}
                      style={{
                        fontSize: 10,
                        position: "absolute",
                        top: 15,
                        left: 80,
                        textAlign: "center",
                        color: colors.light
                      }}
                    >
                      Already have an account?
                      <a style={{ color: colors.primary, marginLeft: 4 }}>
                        Sign in
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </AuthBoxInputs>
          )}
        </AuthBox>
        <FloppyModal
          modalMessage={this.state.modalMessage}
          onCloseModal={this.onCloseModal}
          open={open}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userRegister: data => dispatch(RegisterUser(data))
});

export default connect(undefined, mapDispatchToProps)(Signup);
