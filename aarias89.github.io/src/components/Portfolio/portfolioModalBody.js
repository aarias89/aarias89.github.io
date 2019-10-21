import React, { Component } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

export default class PortfolioModalBody extends Component {
  constructor(props) {
    super(props)
  }

  renderList(arrObj) {
    // console.log(arrObj)
    return arrObj.map((listItem, i) => {
      return <ListGroup.Item key={listItem + i}> {listItem} </ListGroup.Item>
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <Row>
              <Col>
                <h2>Technologies Used:</h2>
              </Col>
            </Row>
            <ListGroup>{this.renderList(this.props.data.techs)}</ListGroup>
          </Col>
          <Col lg={6} sm={12}>
            <Row>
              <Col>
                <h2>How To Test:</h2>
              </Col>
            </Row>
            <ListGroup>
              {this.renderList(this.props.data.howTo.task.directions)}
            </ListGroup>
          </Col>
        </Row>
        <br />
        <br />
        <Container>
          <Row>{this.props.data.longDescription}</Row>
        </Container>
      </Container>
    )
  }
}
