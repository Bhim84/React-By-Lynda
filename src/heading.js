import React from "react";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: true };
  }

  render() {
    const count = this.props.count !== undefined ? this.props.count + ") " : "";
    return (
      <div>
        <h3
          onClick={() => {
            this.setState({ flag: !this.state.flag });
            this.props.changeColor(this.state.flag);
          }}
        >
          {count}
          {this.props.title}
        </h3>
      </div>
    );
  }
}

export default Heading;
