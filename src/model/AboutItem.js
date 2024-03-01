import React, { Component } from "react";

class AboutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { src, alt, title } = this.props.data;
    return (
      <div className="abt-1">
        <img src={src} alt={alt} />
        <p>{title}</p>
      </div>
    );
  }
}

export default AboutItem;
