import React, { Component } from "react";
import "./MainMenu.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-md-11">
              <Navbar light expand="md">
                <NavbarBrand href="/">
                  <img src={require("../../img/logo.png")} alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Modules
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="/Modules/">Modules</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <NavLink href="/components/">Components</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Extensions
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="/Modules/">Modules</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <NavLink href="/components/">Components</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                      <NavLink href="/blog/">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/docs/">Docs</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/contact/">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/forum/">Forum</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/join-free/">Join Free</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            <div className="col-md-1">
              <button className="btn btn-sign-in">Signin</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainMenu;
