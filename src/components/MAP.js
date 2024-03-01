import { Component } from "react";

import map from "../asistent/image/GPS.png";

export default class MAP extends Component {
  render() {
    return (
      <section id="conn">
        <div className="container">
          <div className="ConNect">
            <div className="boglanish">
              <h2>Connect with us</h2>
              <div className="aloqa">
                <div className="tel">
                  <p>Telefon Nomer</p>
                  <input type="tel" placeholder="Telephone" />
                </div>
                <div className="xabar">
                  <p>Xabar</p>
                  <textarea name="" id="#" placeholder="Massage"></textarea>
                </div>
                <p className="ctn" id="btn" href="#">
                  <button>
                    submit your application<span>⇾</span>
                  </button>
                </p>
              </div>
              <div className="phone">
                <p>
                  <span className="fas fas fa-phone"></span>+998 94 332 00 16
                </p>
                <p>
                  <span className="fas fa-mail-bulk"></span>Shamollift@gmail.com
                </p>
                <p>
                  <span className="fas fa-location"></span>Ташкент, Мирзо-Улугбекский район, Шахриабадский район
                </p>
              </div>
            </div>
            <div className="Xarita">
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
