import React, { Component } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import { FaProjectDiagram } from "@react-icons/all-files/fa/FaProjectDiagram";
import { FaKey } from "@react-icons/all-files/fa/FaKey";
export default class Layout extends Component {
  state = {
    navbar_product: [
      {
        link: "/",
        iCoNs: <FaHome />,
        tittle: "Home",
      },
      {
        link: "/about",
        iCoNs: <FaInfo />,
        tittle: "About",
      },
      {
        link: "/project",
        iCoNs: <FaProjectDiagram />,
        tittle: "Project",
      },
      {
        link: "/setting",
        iCoNs: <FaKey />,
        tittle: "Setting",
      },
    ],
  };
  render() {
    return (
      <div>
        <Navbar data={this.state.navbar_product} />
        <Outlet />
      </div>
    );
  }
}
