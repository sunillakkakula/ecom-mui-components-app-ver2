import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="primary" expand="lg" collapseOnSelect fixed="top">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Tagline Traders</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="fas fa-use"></i> Signin
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
