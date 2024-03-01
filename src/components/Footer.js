import { Component } from "react";

import FooterItem from "../model/FooterItem";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="contain">
          <div className="manzil">
            <div className="ctn">
              {this.props.data.map((item, index) => (
                <FooterItem key={index} data={item} />
              ))}
            </div>
            <p>© Shamollift tashkiloti shamollift.uz</p>
          </div>
        </div>
      </footer>
    );
  }
}
