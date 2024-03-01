import React, { Component } from "react";

import About from "../components/About";
import Product from "../components/Product";

import Rectan83 from "../asistent/image/Rectan83.png";
import Rectan831 from "../asistent/image/Rectan831.png";

import Rectan84 from "../asistent/image/Rectan84.png";
import Rectan841 from "../asistent/image/Rectan841.png";
import Rectan842 from "../asistent/image/Rectan842.png";
import Rectan843 from "../asistent/image/Rectan843.png";
import Rectan844 from "../asistent/image/Rectan844.png";

export default class Abouti extends Component {
  state = {
    about_product: [
      {
        src: Rectan83,
        alt: "",
        title:
          "For us, an elevator is a unique mechanism, and not just a square box that moves you up and down. Aride in our elevator is an absolutely unique experience for any passenger. The creation of an elevator is based on technologies of the highest level, which changes the perception of the elevator as a  whole.” We are Shamollift company, providing our customers with the most advanced elevator equipment and a full range of services from design to maintenance of passenger, kitchen, construction,  automobile and freight elevators, as well as escalators.",
      },
      {
        src: Rectan831,
        alt: "",
        title:
          "The company was established in 2008 in Turkey, since then the company has been improving its productoccupying a worthy place in the global elevator equipment market. The company is engaged in production elevators, passenger, freight type, based on hydraulics and electrics. Thanks to the accumulated experience, Shamollift elevators are reliable, easy to install and easy to maintain. To the territory In  Uzbekistan, brand products arrive fully equipped and ready for installation. To the territory In Uzbekistan, brand products arrive fully equipped and ready for installation.",
      },
    ],
    products: [
      { src: Rectan84, alt: "", title: "freight elevators", action_text: "Detailed", link: "#" },
      { src: Rectan841, alt: "", title: "hospital elevators", action_text: "Detailed", link: "#" },
      { src: Rectan842, alt: "", title: "elevators for disabled", action_text: "Detailed", link: "#" },
      { src: Rectan843, alt: "", title: "Kitchen elevators", action_text: "Detailed", link: "#" },
      { src: Rectan844, alt: "", title: "Cottage elevators", action_text: "Detailed", link: "#" },
    ],
  };
  render() {
    const { about_product, products } = this.state;
    return (
      <>
        <About data={about_product} />
        <Product data={products} />
      </>
    );
  }
}
