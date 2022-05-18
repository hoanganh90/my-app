import React from "react";
import { RenderButton } from "./Button";
class Child extends React.Component {
  state = {
    inputFromApp: "",
    inputFromButton: ""
  };
  componentDidMount() {
    this.setState({
      inputFromApp: this.props.dataFromApp
    });
  }
  handleClick = (props) => {
    console.log(`handleClick(): ${props}`);
  };
  render() {
    const inputFromApp = this.state.inputFromApp;
    const inputFromButton = this.state.inputFromButton;
    return (
      <div>
        <input value={inputFromApp}></input>
        <br></br>
        <input value={inputFromButton}></input>
        <RenderButton handleClick={this.handleClick} />
      </div>
    );
  }
}
export default Child;
