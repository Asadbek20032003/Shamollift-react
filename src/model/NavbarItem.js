import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { link, iCoNs, tittle } = this.props.data;
    return (
      <li className="link_a">
        <Link to={link}>
          <span className="fas fa-home">{iCoNs}</span>
          {tittle}
        </Link>
      </li>
    );
  }
}

export default NavbarItem;
