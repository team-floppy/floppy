import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import { isMobile } from "react-device-detect";
import SetUpBox from "../../Components/Wrappers/SetUpBox";
import { Viewer, Comedian } from "../../Reusables/Icons";
import Text from "../../Components/Typography/Text";
import colors from "../../Reusables/Colors";
import FloppyButton from "../../Components/Buttons/FloppyButton";
import Choice from "../../Components/Wrappers/Choice";
import CardDisplay from "../../Components/Wrappers/CardDisplay";
import CheckButton from "../../Components/Buttons/CheckButton";

const genres = [
  "Cracks",
  "Improvisational comedy",
  " Character comedy",
  "Spoof",
  "Stand-up Comedy",
  "Insult Comedy",
  "One-line joke",
  "Shock humour",
  "Physical comedy"
];

class UserChoice extends Component {
  state = {
    isComedian: false,
    isViewer: true,
    current: 1,
    choice: []
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

  handChoice = choice => {
    if (this.state.choice.includes(choice)) {
      this.setState(prevSate => ({
        choice: prevSate.choice.filter(pick => pick != choice)
      }));
      return;
    }

    this.setState(prevSate => ({
      choice: [...prevSate.choice, choice]
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
      <div
        className="p-5"
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
              textContent="Preference"
              lineHeight={44}
              fontSize={24}
              style={{
                color: colors.light,
                marginTop: "0.4rem",
                marginBottom: "0.5rem"
              }}
            />
          </div>

          <div className="flex justify-center">
            <Text
              category="p"
              textContent="Pick Comedy Genre"
              lineHeight={44}
              fontWeight={100}
              fontSize={12}
              style={{
                color: colors.light,
                marginBottom: "2rem"
              }}
            />
          </div>

          <CardDisplay>
            {genres.map((genre, i) => (
              <CheckButton
                key={i}
                title={genre}
                borderColor="primary"
                textColor="primary"
                height={38}
                width={135}
                handChoice={this.handChoice}
              />
            ))}
          </CardDisplay>
          <div
            className="flex justify-center "
            style={{ marginTop: "2rem", marginBottom: "0.5rem" }}
          >
            <FloppyButton
              title="Finish"
              color="primary"
              textColor="light"
              height={38}
              width={isMobile ? 200 : 300}
              action={this.props.handleOpenPopUp}
            />
          </div>

          <div
            className="flex justify-center "
            style={{
              marginTop: "2rem",
              bottom: "1.5rem",
              position: "relative"
            }}
          >
            <span
              style={{
                position: "absolute",
                fontSize: "20px",
                lineheight: "17px",
                color: colors.light
              }}
            >
              {`${this.props.currentStep}`} / {this.props.totalSteps}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserChoice;
