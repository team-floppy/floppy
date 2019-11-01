import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import { isMobile } from "react-device-detect";
import SetUpBox from "../../Components/Wrappers/SetUpBox";
import { Viewer, Comedian } from "../../Reusables/Icons";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import FloppyButton from "../../Components/Buttons/FloppyButton";

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
  render() {
    const { isComedian, isViewer } = this.state;
    return (
      <StepWizard>
        <SetUpBox>
          <div>
            <Text
              category="p"
              textContent="You here as ?"
              lineHeight={44}
              fontWeight={500}
              fontSize={25}
              style={{
                textAlign: "center",
                color: colors.light,
                marginBottom: "2rem"
              }}
            />
            <div className="flex">
              <Viewer
                isViewer={isViewer}
                handleIsviewer={this.handleIsviewer}
              />
              <Comedian
                isComedian={isComedian}
                handleIscomedian={this.handleIscomedian}
              />
            </div>
            <div style={{ marginTop: "2rem" }}>
              <FloppyButton
                title="Next"
                color="primary"
                textColor="light"
                height={40}
                width={isMobile ? 200 : 300}
              />
            </div>
          </div>
        </SetUpBox>
      </StepWizard>
    );
  }
}

export default UserType;
