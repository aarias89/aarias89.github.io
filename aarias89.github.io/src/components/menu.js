import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../style/menu.css"
import { Link } from "gatsby"

export default function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <span id="nav-intro">
          <h1>Andres Arias</h1>
          <h2>Web Developer | Greater New York Area</h2>
        </span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="menu-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link as={Link} href="#skills" to="/#skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio/">
              Portfolio
            </Nav.Link>

            <Nav.Link eventKey={2} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
