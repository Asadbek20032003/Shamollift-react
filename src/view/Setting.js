import React, { Component } from "react";

import Believers from "../components/Believers";
import MAP from "../components/MAP";
import Footer from "../components/Footer";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Png18 from "../asistent/image/18.png";
import Png4 from "../asistent/image/4.png";
import Png37 from "../asistent/image/37.png";
import Png2 from "../asistent/image/2.png";
import Png5 from "../asistent/image/5.png";
import Png6 from "../asistent/image/6.png";
import Png9 from "../asistent/image/9.png";

export default class Setting extends Component {
  state = {
    believer_product: [
      { src: Png18, link: "#" },
      { src: Png4, link: "#" },
      { src: Png37, link: "#" },
      { src: Png2, link: "#" },
      { src: Png5, link: "#" },
      { src: Png18, link: "#" },
      { src: Png37, link: "#" },
      { src: Png6, link: "#" },
      { src: Png9, link: "#" },
    ],
    footer_product: [
      { Icons: <FaTelegram /> },
      { Icons: <FaInstagram /> },
      { Icons: <FaFacebook /> },
      { Icons: <FaYoutube /> },
    ],
  };

  render() {
    const { believer_product, footer_product } = this.state;
    return (
      <>
        {/* <Navbar data={navbar_product} /> */}
        <Believers data={believer_product} />
        <MAP />
        <Footer data={footer_product} />
      </>
    );
  }
}
