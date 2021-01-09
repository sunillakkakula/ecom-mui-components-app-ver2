import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction.js";
import { Card } from "@material-ui/core";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header>
        <Navbar
          style={{ background: "#800000" }}
          expand="lg"
          collapseOnSelect
          fixed="top"
        >
          <Container>
            {
              <img
                src="./images/logo.jpg"
                alt="..."
                width="50px"
                height="50px"
                className="img-thumbnail"
                style={{ marginRight: "30px" }}
              ></img>
            }

            <LinkContainer to="/">
              <Navbar.Brand>Tagline Traders</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i
                      className="fas fa-shopping-cart"
                      style={{ color: "white" }}
                    ></i>{" "}
                    <span style={{ color: "white" }}>Cart</span>
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                    style={{ color: "white" }}
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-use"></i> Signin
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
