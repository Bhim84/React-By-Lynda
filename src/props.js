import React from "react";

class PropsDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>Hello {this.props.name}</h4>
      </div>
    );
  }
}

export default PropsDemo;
