import React, { Component } from "react";

import BelieversItem from "../model/BelieversItem";

export default class Believers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="Believers">
        <div className="container">
          <h1>Those who trusted us</h1>
          <div className="homiylar">
            <div className="homiy">
              {this.props.data.map((item, index) => (
                <BelieversItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
