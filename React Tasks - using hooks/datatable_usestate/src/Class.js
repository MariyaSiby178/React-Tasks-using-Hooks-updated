import React, { Component } from "react";
import ClassComponent from "./ClassComponent";

export default class Class extends Component {
  constructor() {
    super();
    this.state = {
      name: "Tamil",
    };
  }

  click = () => {
    this.setState({ name: "Rakesh" });
  };

  render() {
    return (
      <div>
        {/* <h5>Hello World, It's Class component! <span className="danger">{this.state.name}</span></h5> */}
        <h1>One</h1>
        <ClassComponent name={this.state.name} />
        <button onClick={() => this.click()}>Click me!</button>
      </div>
    );
  }
}
