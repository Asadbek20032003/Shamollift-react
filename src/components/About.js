import React, { Component } from "react";
import AboutItem from "../model/AboutItem";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="about">
        <div className="container">
          <h1>About kompany</h1>
          {this.props.data.map((item, index) => (
            <AboutItem key={index} data={item} />
          ))}
        </div>
      </section>
    );
  }
}
