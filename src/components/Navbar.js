import React, { Component } from "react";

import Logo from "../asistent/image/logo.png";
import NavbarItem from "../model/NavbarItem";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar">
        <img className="logo" src={Logo} alt="" />
        <p className="medI" href="#">
          <i className="fas fa-bars "></i>
        </p>

        <ul className="navbar-nav">
          {this.props.data.map((item, index) => (
            <NavbarItem key={index} data={item} />
          ))}
        </ul>
        <p className="ctn" href="#">
          <button className="ctn">Contact</button>
        </p>
      </nav>
    );
  }
}
