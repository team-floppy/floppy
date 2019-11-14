import React from "react";
import { Link } from "react-router-dom";
import AuthBox from "../Wrappers/AuthBox";
import { connect } from "react-redux";
import FloppyInput from "../Input/FloppyInput";
import FloppyButton from "../Buttons/FloppyButton";
import { Close } from "../../Reusables/Icons";
import colors from "../../Reusables/Colors";
import { facebook, twitter, google } from "../../Reusables/Socials";
import Text from "../Typography/Text";
import AuthBoxHero from "../Wrappers/AuthBoxHero";
import AuthBoxInputs from "../Wrappers/AuthBoxInputs";
import { LoginUser } from "../../Actions/Auth";
import FloppyModal from "../Modal/FloppyModal";

class Signin extends React.Component {
  state = {
    username: "",
    password: "",
    modalMessage: "",
    open: false,
    isAuthing: false
  };
  handleSubmit = () => {
    const { username, password } = this.state;

    this.props
      .userLogin({ username, password })
      .then(res => this.setState({ modalMessage: res.message, open: true }))
      .catch(error =>
        this.setState({ modalMessage: error.message, open: true })
      );
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { isAuthing, open } = this.state;
    return (
      <div>
        <AuthBox>
          <AuthBoxInputs reverse>
            <div
              className="flex justify-end"
              style={{ position: "absolute", left: "7.3em", top: 15 }}
            >
              <span onClick={this.props.handleOpenPopUp}>
                <Close />
              </span>
            </div>
            <div
              className="flex justify-center items-center "
              style={{ height: "100%" }}
            >
              <div>
                <Text
                  category="p"
                  textContent="Sign In"
                  lineHeight={59}
                  fontWeight={600}
                  fontSize={30}
                  style={{
                    textAlign: "center",
                    color: colors.primary,
                    marginBottom: 30
                  }}
                />

                <div
                  className="flex"
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
                    color: colors.light,
                    marginTop: 22
                  }}
                >
                  or
                </p>
                <div>
                  <div className="pt-6">
                    <FloppyInput
                      type="text"
                      bgColor="dark"
                      placeholder="username"
                      success={false}
                      error={true}
                      width={281}
                      height={28}
                      action={e => this.setState({ username: e.target.value })}
                    />
                  </div>
                  <div className="pt-3">
                    <FloppyInput
                      type="password"
                      bgColor="dark"
                      placeholder="Password"
                      success={true}
                      error={false}
                      width={281}
                      height={28}
                      action={e => this.setState({ password: e.target.value })}
                    />
                  </div>

                  <FloppyButton
                    title="Sign In"
                    color="primary"
                    textColor="darkX"
                    height={41}
                    action={this.handleSubmit}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <span
                    onClick={() => this.props.handleOpenPopUpSwitch("isSignUp")}
                    style={{
                      fontSize: 10,
                      position: "absolute",
                      top: 20,
                      left: 80,
                      textAlign: "center",
                      color: colors.light
                    }}
                  >
                    Don't have an account?
                    <Link style={{ color: colors.primary, marginLeft: 4 }}>
                      Sign up
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </AuthBoxInputs>
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
  userLogin: data => dispatch(LoginUser(data))
});

export default connect(undefined, mapDispatchToProps)(Signin);
