import React, { Component } from "react";
import ProductItem from "../model/ProductItem";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="Product">
        <div className="container">
          <h1>Our production</h1>
          <div className="PRdc">
            {this.props.data.map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
