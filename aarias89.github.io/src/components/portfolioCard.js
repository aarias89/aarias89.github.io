import React, { Component } from "react"
// remove Helmet after intial test
import { Helmet } from "react-helmet"
// remove Helmet after intial test
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import PlaceHolder from "../images/img-placeholder.svg"

export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">{this.props.btnMessage}</Button>
          </Card.Body>
        </Card>
        <br />
      </div>
    )
  }
}
