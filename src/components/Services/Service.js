import React, { Component } from "react";
import "./Service.scss";
class Service extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="service-section">
          <div className="service-content">
            <img
              src={require("../../img/" + this.props.image)}
              alt="servie-img"
            />
            <h3 className="service-title">{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
