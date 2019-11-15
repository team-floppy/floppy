import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import { isMobile } from "react-device-detect";
import SetUpBox from "../../Components/Wrappers/SetUpBox";
import { Type } from "../../Actions/Auth";
import Loader from "../../imgs/loader.gif";
import { connect } from "react-redux";
import { Viewer, Comedian } from "../../Reusables/Icons";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import FloppyButton from "../../Components/Buttons/FloppyButton";
import FloppyModal from "../../Components/Modal/FloppyModal";

class UserType extends Component {
  state = {
    isComedian: false,
    isViewer: true,
    current: 1
  };
  handleIsviewer = () => {
    const { current } = this.state;
    if (!current) {
      this.setState({ isComedian: false });
    }
    this.setState(prevSate => ({
      isViewer: true,
      current: 1
    }));
  };

  handleIscomedian = () => {
    const { current } = this.state;
    if (current) {
      this.setState({ isViewer: false });
    }
    this.setState(prevSate => ({
      isComedian: true,
      current: 0
    }));
  };

  handleNext = () => {
    const { current } = this.state;
    if (current === 0) {
      this.props.userIs("Comedian");
    } else {
      this.props.userIs("Viewer");
    }
    this.props.nextStep();
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { isComedian, isViewer, current, open, modalMessage } = this.state;
    return (
      <div
        className="flex justify-center"
        style={{
          width: "10em",
          background: colors.darkX,
          borderRadius: "20px"
        }}
      >
        <div>
          <div className="flex justify-center">
            <Text
              category="p"
              textContent="You are here as?"
              lineHeight={44}
              fontWeight={500}
              fontSize={25}
              style={{
                color: colors.light,
                marginTop: "2rem",
                marginBottom: "2rem"
              }}
            />
          </div>

          <div className="flex justify-around" style={{ width: "20rem" }}>
            <div>
              <Viewer
                isViewer={isViewer}
                handleIsviewer={this.handleIsviewer}
              />
            </div>
            <div>
              <Comedian
                isComedian={isComedian}
                handleIscomedian={this.handleIscomedian}
              />
            </div>
          </div>
          <div
            className="flex justify-center "
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <FloppyButton
              title="Next"
              color="primary"
              textColor="light"
              height={38}
              width={isMobile ? 200 : 300}
              action={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  userIs: data => dispatch(Type(data))
});

const mapStateToProps = ({ User }) => ({
  User
});

export default connect(mapStateToProps, mapDispatchToProps)(UserType);
