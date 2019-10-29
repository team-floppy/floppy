import React, { Component } from "react";
import Button from "../Components/Buttons/FloppyButton";
import Input from "../Components/Input/FloppyInput";

class Example extends Component {
  render() {
    return (
      <div className="container mx-auto bg-black px-4">
        <h1>hello</h1>
        <Button
          title="Pay"
          color="light"
          textColor="primary"
          height={50}
          width={200}
        />
        <Button
          title="Button"
          color="primary"
          textColor="light"
          height={50}
          width={200}
        />
        <Button
          title="View"
          borderColor="primary"
          textColor="primary"
          height={50}
          width={200}
        />

        <Button
          title="Save"
          borderColor="light"
          textColor="light"
          height={50}
          width={200}
        />

        <Input type="text" bgColor="dark" />
        <Input type="text" bgColor="light" />
      </div>
    );
  }
}

export default Example;
