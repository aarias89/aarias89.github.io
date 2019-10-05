import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profilepic from "../images/profilepic.png"

export default class About extends Component {
  render() {
    return (
      <div>
        <br />
        <h3>About me</h3>
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
                further improve my craft in any way.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
