import React, { Component } from "react";

class BlogRight extends Component {
  render() {
    return (
      <div className="blog-right-section">
        <div className="blog-right-container ml-auto">
          <div className="row">
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
                      <div className="col-md-3">
                        <img
                          src={require("../../img/blog-icon-2.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-md-9">
                        <h3>Evolving Database</h3>
                      </div>
                    </div>
                  </div>

                  <div className="blog-call-to-section">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src={require("../../img/blog-icon-3.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-md-9">
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
                      <div className="col-md-3">
                        <img
                          src={require("../../img/blog-icon-4.png")}
                          alt="blog-icon"
                        />
                      </div>
                      <div className="col-md-9">
                        <h3>Get Organized in a Flip</h3>
                      </div>
                    </div>
                  </div>

                  <button className="btn veiw-details">View Details</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="blog-img">
                <img
                  className="img-size"
                  src={require("../../img/blog-img-2.jpg")}
                  alt="blog-img"
                />

                <div className="blog-icon icon-for-right-blog">
                  <img
                    src={require("../../img/blog-icon2.png")}
                    alt="blog-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogRight;
