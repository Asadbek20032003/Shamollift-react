import { Component } from "react";

import SubscribeItem from "../model/SubscribeItem";

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="Subscribe">
        <div className="contain">
          <h1>Subscribe to our newsletter</h1>
          <div className="sub">
            {this.props.data.map((item, index) => (
              <SubscribeItem key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
