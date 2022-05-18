import React from "react";
import Child from "./Child";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Data from App"
    };
  }

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Child dataFromApp={data} />
      </div>
    );
  }
}
export default App;
