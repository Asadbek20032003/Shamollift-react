import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { src, alt, title, link, action_text } = this.props.data;
    return (
      <div className="card">
        <img src={src} alt={alt} />
        <div className="lift">
          <h2>{title}</h2>
          <p className="ctn" href={link}>
            <button>{action_text}</button>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
