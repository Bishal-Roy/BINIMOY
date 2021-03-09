import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark collapsOnSelect">
        <Container>
          <Link className="navbar-brand" to="/">
            BINIMOY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  Cart <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-user"></i>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </header>
  );
}

export default Header;
