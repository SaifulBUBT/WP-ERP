import React, { Component } from "react";

import "./App.scss";
import { Form, FormGroup, Input } from "reactstrap";
import MainMenu from "./components/Menu/MainMenu";
import Banner from "./components/Banner/Banner";
import BusinessCall from "./components/BusinessCall/BusinessCall";
import Service from "./components/Services/Service";
import BlogLeft from "./components/BlogLeft/BlogLeft";
import BlogRight from "./components/BlogRight/BlogRight";
import Testimonial from "./components/Testimonial/Testimonial";
import CalltoAction from "./components/CalltoAction/CalltoAction";
import FooterWidget from "./components/FooterWidget/FooterWidget";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gradient-bg">
          <div className="bg-color" />
          <MainMenu />
          <Banner />
        </div>
        <BusinessCall />
        {/**** Service section start*** */}
        <div className="container padding-space">
          <div className="row">
            <Service
              title="Open Source"
              desc="The Core plugin and HR, CR modules are absolutely free to use,
                  free to customize and you can add enhancements depending on your
                  ideas and needs."
              image="service-1.png"
            />
            <Service
              title="Feature Filled Modules"
              desc="Modules are designed to take your business to the next level. If you have a small business, this is ideal for keeping your budget tight but yet get professional results."
              image="service-2.png"
            />
            <Service
              title="Feature Filled Modules"
              desc="Modules are designed to take your business to the next level. If you have a small business, this is ideal for keeping your budget tight but yet get professional results."
              image="service-3.png"
            />
          </div>
        </div>

        <BlogLeft />
        {/**** Testimonial section*** */}
        <div className="testimonial-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="client-reviews text-center">
                  <h2>Reviews by our clients</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <Testimonial
                image="testimonial1.png"
                testimonial=" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy."
                author="Toma Fong"
                designation="CEO"
              />
              <Testimonial
                image="testimonial2.png"
                testimonial=" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy."
                author="Toma Fong"
                designation="CEO"
              />
              <Testimonial
                image="testimonial3.png"
                testimonial=" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy."
                author="Toma Fong"
                designation="CEO"
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <button className="btn btn-testimonial">
                    Read All The Testimonials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*********Callto Action area******* */}
        <CalltoAction />

        {/*********Footer widget area******* */}
        <div className="footer-widget-area">
          <div className="container">
            <div className="row">
              <FooterWidget
                title="WP ERP"
                item1="About"
                item2="Refund Policy"
                item3="Terms of Service"
                item4="Support Policy"
                item5="FAQ"
              />
              <FooterWidget
                title="Products"
                item1="HRM"
                item2="CRM"
                item3="Accounting"
                item4="Request A Demo"
              />
              <FooterWidget
                title="Resources"
                item1="Documentation"
                item2="Discussion Forum"
                item3="Submit Ideas"
                item4="Translate Extensions"
              />
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Newsletter</h3>
                  <Form>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Your Email"
                      />
                    </FormGroup>
                  </Form>
                  <button className="btn btn-primary btn-subscribe">
                    Subscribe!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/***** Footer**** */}
        <Footer />
      </div>
    );
  }
}

export default App;
