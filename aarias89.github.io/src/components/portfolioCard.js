import React, { Component } from "react"
import { Container,Card, Button } from "react-bootstrap"
import { Link } from "gatsby"


export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cardImg, cardTitle, cardDescription, button } = this.props.project
    let imgRoute = require('../images/portfolioImages/' + cardImg);
    
    return (
      // <Container xs={12} md={6} lg={4}>
        
        <Card className="portfolio-card">
          <br />
          <Card.Img variant="top" src={imgRoute} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardDescription}</Card.Text>
            <a target="_blank" href={button.cta1.url}><Button className="card-button" size="sm" variant="primary">{button.cta1.copy}</Button></a>
            <a target="_blank" href={button.cta2.url}><Button className="card-button" size="sm" variant="primary">{button.cta2.copy}</Button></a>
            <a target="_blank" href={button.cta3.url}><Button className="card-button" size="sm" variant="primary">{button.cta3.copy}</Button></a>
          </Card.Body>
          <br />
        </Card>
    )
  }
}
