import React, { Component } from "react";
import "./BlogLeft.scss";

class BlogLeft extends Component {
  render() {
    return (
      <div className="blog-left-section">
        <div className="blog-left-container">
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <div className="blog-img">
                <img
                  className="img-size"
                  src={require("../../img/blog-img-1.jpg")}
                  alt="blog-img"
                />

                <div className="blog-icon">
                  <img
                    src={require("../../img/blog-icon-1.png")}
                    alt="blog-icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="blog-description">
                <h2>Empower your workforce with HRM</h2>
                <p>
                  Individual profiles and work logs for each employee allow you
                  to manage their payrolls. Individual profiles and work logs
                  for each employee allow you to manage their
                  payrolls.Individual profiles and work logs for each employee
                  allow you to manage their payrolls.
                </p>
                <div className="blog-call-to">
                  <div className="blog-call-to-section">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src={require("../../img/blog-icon-2.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-lg-9">
                        <h3>Evolving Database</h3>
                      </div>
                    </div>
                  </div>

                  <div className="blog-call-to-section">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src={require("../../img/blog-icon-3.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-lg-9">
                        <h3>Keep a Keen Eye</h3>
                        <p>
                          Track / Import employee attendances and manage their
                          leaves. Make important announcements when you need
                          everyone to is heard.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="blog-call-to-section">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src={require("../../img/blog-icon-4.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-lg-9">
                        <h3>Get Organized in a Flip</h3>
                      </div>
                    </div>
                  </div>

                  <button className="btn veiw-details">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogLeft;
