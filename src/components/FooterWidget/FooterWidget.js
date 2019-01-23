import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./FooterWidget.scss";
class FooterWidget extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <div className="single-footer-widget">
          <h3>{this.props.title}</h3>
          <ListGroup>
            <ListGroupItem tag="a" href="#">
              {this.props.item1}
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              {this.props.item2}
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              {this.props.item3}
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              {this.props.item4}
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              {this.props.item5}
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default FooterWidget;
