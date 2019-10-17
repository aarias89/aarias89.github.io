import React, { Component } from "react"
import { Card, Button } from "react-bootstrap"

export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cardImg, cardTitle, cardDescription } = this.props.project

    let imgRoute = require("../images/portfolioImages/" + cardImg)

    // Filter through button object and only return the CTA's that are supposed to be rendered.
    const ctas = Object.entries(this.props.project.button).filter(cta => {
      return cta[1].view === true
    })

    const renderButton = ctas.map(cta => {
      return (
        <a
          key={cta[1].copy}
          target="_blank"
          href={cta[1].url}
          rel="noopener noreferrer"
        >
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
          {renderButton}
        </Card.Body>
        <br />
      </Card>
    )
  }
}
