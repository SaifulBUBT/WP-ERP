import React, { Component } from "react";
import "./BusinessCall.scss";
class BusinessCall extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="business-content">
              <img
                className="img-fluid"
                src={require("../../img/image1.png")}
                alt="banner-img"
              />
              <p>
                Trusted by <span>3000+ Businesses</span> over 100 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessCall;
