import React, { Component } from "react";

import Adventage from "../components/Adventage";
import Subscribe from "../components/Subscribe";
import Vector from "../asistent/image/Vector.png";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

export default class Project extends Component {
  state = {
    adventag_product: [
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already  constructed facilities and old buildings.",
      },
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already constructed facilities and old buildings.",
      },
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already constructed facilities and old buildings.",
      },
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already constructed facilities and old buildings.",
      },
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already constructed facilities and old buildings.",
      },
      {
        src: Vector,
        alt: "",
        title: "DESIGN",
        text: "We provide services for the design of shafts for a certain type of elevators at the time of the start of construction of a building, as well as for the selection and design of elevators for already constructed facilities and old buildings.",
      },
    ],
    subscribe_product: [
      { icon: <FaTelegram />, action_text: "Telegram", link: "#" },
      { icon: <FaInstagram />, action_text: "Instagram", link: "#" },
      { icon: <FaYoutube />, action_text: "YouTube", link: "#" },
      { icon: <FaFacebook />, action_text: "Facebook", link: "#" },
    ],
  };
  render() {
    const { adventag_product, subscribe_product } = this.state;
    return (
      <>
        <Adventage data={adventag_product} />
        <Subscribe data={subscribe_product} />
      </>
    );
  }
}
