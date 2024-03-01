import React, { Component } from "react";

import AdventageItem from "../model/AdventageItem";

export default class Adventage extends Component {
  render() {
    return (
      <section id="adventage">
        <div className="container">
          <h1>OUR ADVANTAGES</h1>
          <div className="proekt">
            {this.props.data.map((item, index) => (
              <AdventageItem key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
