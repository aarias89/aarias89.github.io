import React, { Component } from "react"
import { Container, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cardImg, cardTitle, cardDescription } = this.props.project

    let imgRoute = require("../images/portfolioImages/" + cardImg)

    const ctas = Object.entries(this.props.project.button).filter(cta => {
      return cta[1].view === true
    })

    const renderButton = ctas.map(cta => {
      return (
        <a key={cta[1].copy} target="_blank" href={cta[1].url}>
          <Button className="card-button" size="sm" variant="primary">
            {cta[1].copy}
          </Button>
        </a>
      )
    })

    return (
      // <Container xs={12} md={6} lg={4}>

      <Card className="portfolio-card">
        <br />
        <Card.Img variant="top" src={imgRoute} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardDescription}</Card.Text>
          {/* <a target="_blank" href={button.cta1.url}>
            <Button className="card-button" size="sm" variant="primary">
              {button.cta1.copy}
            </Button>
          </a> */}
          {renderButton}
        </Card.Body>
        <br />
      </Card>
    )
  }
}
