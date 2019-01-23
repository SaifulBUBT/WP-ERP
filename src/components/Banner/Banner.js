import React, { Component } from "react";
import "./Banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner-area ml-auto">
        <div className="banner-content">
          <h1>
            Supercharge <br />
            Your Small Business
          </h1>
          <h4>
            from your <span>WordPress</span> dashboard
          </h4>
          <p>
            WP ERP optimises your small to large enterprise with powerful HRM,
            CRM & Accounting - Unlock more with 20+ extensions & Project
            Management module.
          </p>
          <div className="button-area">
            <button className="btn download">
              <i class="fa fa-arrow-alt-circle-down" />
              Download Free
            </button>
            <button className="btn demo">Demo</button>
            <button className="btn documentation">Documentation</button>
          </div>
        </div>
        <div className="banner-img">
          <img
            className="img-fluid"
            src={require("../../img/banner.png")}
            alt="banner-img"
          />
        </div>
      </div>
    );
  }
}
export default Banner;
