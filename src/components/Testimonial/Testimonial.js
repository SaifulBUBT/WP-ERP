import React, { Component } from "react";
import "./Testimonial.scss";

class Testimonial extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="single-testimonial">
          <img
            src={require("../../img/" + this.props.image)}
            alt="testimonial"
          />
          <p>{this.props.testimonial}</p>
          <h5 className="test-name">{this.props.author}</h5>
          <h5 className="test-designation">{this.props.designation}</h5>
        </div>
      </div>
    );
  }
}
export default Testimonial;
