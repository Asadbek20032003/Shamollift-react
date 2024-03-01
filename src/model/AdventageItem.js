import React, { Component } from "react";

class AdventageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { src, alt, title, text } = this.props.data;
    return (
      <div className="proekt-11">
        <img src={src} alt={alt} />
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default AdventageItem;
