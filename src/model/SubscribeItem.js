import React, { Component } from "react";

class SubscribeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { link, icon, action_text } = this.props.data;
    return (
      <p className="ctn" href={link}>
        <button>
          <span className="icon">{icon}</span>
          {action_text}
        </button>
      </p>
    );
  }
}

export default SubscribeItem;
