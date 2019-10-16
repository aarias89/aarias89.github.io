import React, { Component } from "react"
// remove Helmet after intial test
import { Helmet } from "react-helmet"
// remove Helmet after intial test
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import PlaceHolder from "../images/img-placeholder.svg"

export default class PortfolioCard extends Component {
  render() {
    return (
      <div>
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={PlaceHolder} />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>Small Project Description</Card.Text>
            <Button variant="primary">View Demo</Button>
          </Card.Body>
        </Card>
        <br />
      </div>
    )
  }
}
