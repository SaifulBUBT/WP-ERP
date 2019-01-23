import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="social-sharing">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-youtube" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="footer-content">
                <p>@copy;2016 WP ERP. Built by the folks at weDevs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
