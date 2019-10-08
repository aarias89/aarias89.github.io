import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profilepic from "../images/profilepic.png"

import { Link } from "gatsby"

export default class About extends Component {
  render() {
    return (
      <div>
        <br />
        <h3 id="about">About me</h3>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Image src={profilepic} thumbnail />
            </Col>
            <Col xs={12} md={7}>
              <p>
                Hey, I'm Andres and I'm a software developer building cool
                things with JavaScript and Ruby on Rails. I enjoy working with
                client-side and server-side technologies and I am always looking
                into learning and playing with new technologies that will
                further improve my craft in any way. YAY?
              </p>
            </Col>
          </Row>
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/portfolio/">Portfolio</Link>
        </Container>
      </div>
    )
  }
}
