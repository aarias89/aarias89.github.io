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
        {/* <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Helmet> */}
        <p>hello from portfolio card component</p>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={PlaceHolder} />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>Small Project Description</Card.Text>
            <Button variant="primary">View Demo</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={PlaceHolder} />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>Small Project Description</Card.Text>
            <Button variant="primary">Cource Code</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
