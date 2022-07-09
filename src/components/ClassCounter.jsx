import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="box">
        <h1>Class component</h1>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          style={{ margin: "10px" }}
        >
          +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}

export default ClassCounter;
