import React, { Component } from "react";
import Class from "./Class";
import { createRoutesFromElements } from "react-router-dom";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props };
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Class</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

