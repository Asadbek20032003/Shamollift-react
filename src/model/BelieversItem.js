import React, { Component } from "react";

class BelieversItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { src, link } = this.props.data;
    return (
      <div className="rasm">
        <img src={src} alt={link} />
      </div>
    );
  }
}

export default BelieversItem;
