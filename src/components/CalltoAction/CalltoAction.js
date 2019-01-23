import React, { Component } from "react";
import "./CalltoAction.scss";

class CalltoAction extends Component {
  render() {
    return (
      <div className="call-to-action-area text-center">
        <div className="call-to-action-bg" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="call-to-action-content">
                <h1>Supercharge Your Small Business</h1>
                <h3>
                  from your <span>WordPress</span> dashboard
                </h3>
                <button className="btn btn-get-started">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("../../img/call-to-action-icon.png")}
          alt="call-to-action"
        />
      </div>
    );
  }
}
export default CalltoAction;
