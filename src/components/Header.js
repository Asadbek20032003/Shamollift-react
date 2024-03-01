import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="content">
            <h1>Shamollift</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, exercitationem placeat debitis totam,
              aut tempore magni eveniet quos consequuntur quas accusantium natus iusto molestiae fuga. Dolorem, incidunt
              veniam? Id.
            </p>
            <p className="ctn" id="btn" href="#">
              <button>
                Contact <span>⇾</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
