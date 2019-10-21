import React, { Component } from "react"
import { Card, Button } from "react-bootstrap"
import MyModal from "../modal"
import PortfolioModalBody from "./portfolioModalBody"

export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)
    this.state = { addModalShow: false }
  }

  render() {
    const { cardImg, cardTitle, cardDescription } = this.props.project

    let imgRoute = require("../../images/portfolioImages/" + cardImg)

    // Filter through button object and only return the CTA's that are supposed to be rendered.
    const ctas = Object.entries(this.props.project.button).filter(cta => {
      return cta[1].view === true
    })

    let addModalClose = () => this.setState({ addModalShow: false })

    const renderButton = ctas.map(cta => {
      const { modalData, url, copy } = cta[1]
      // let modalInfo = modalData
      if (modalData) {
        return (
          <a key={copy} target="_blank" href={url} rel="noopener noreferrer">
            <Button
              className="card-button"
              size="sm"
              variant="primary"
              onClick={() => this.setState({ addModalShow: true })}
            >
              {copy}
            </Button>
            <MyModal
              modaltitle={"Aditional Info - " + cardTitle}
              bodydata={<PortfolioModalBody data={modalData} />}
              footerdata=""
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </a>
        )
      } else {
        return (
          <a key={copy} target="_blank" href={url} rel="noopener noreferrer">
            <Button className="card-button" size="sm" variant="primary">
              {copy}
            </Button>
          </a>
        )
      }
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
