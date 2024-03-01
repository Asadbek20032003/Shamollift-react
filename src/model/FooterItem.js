import React, { Component } from "react";

class FooterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Icons } = this.props.data;
    return <span className="icon">{Icons}</span>;
  }
}

export default FooterItem;
