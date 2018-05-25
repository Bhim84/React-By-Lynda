import React from "react";

import Heading from "./heading.js";

import StateLessComponent from "./stateless-component.js";
import ClassComponent from "./class-component";
import PropsDemo from "./props.js";

class AllDemo extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      headline: { color: "blue" }
    };
  }

  changeColor(flag) {
    this.setState({ headline: { color: flag ? "red" : "blue" } });
  }

  render() {
    return (
      <div>
        <h2 style={this.state.headline}>Learning React</h2>
        <Heading
          count={1}
          title="State Less component"
          changeColor={this.changeColor}
        />
        <StateLessComponent />
        <Heading count={2} title="Class Component" />
        <ClassComponent />
        <Heading count={3} title="Class Component using Props" />
        <PropsDemo name="props" />
      </div>
    );
  }
}

export default AllDemo;
