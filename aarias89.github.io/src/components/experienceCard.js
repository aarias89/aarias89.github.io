import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

export default class ExperienceCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { companyName, date, jobTitle, tasks } = this.props.job
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={10}>
              <p id="experience-title">
                {companyName} , &nbsp;{jobTitle}
              </p>
              <p id="experience-time">
                {date.start} - {date.end}
              </p>
              <ul id="experince-list">
                {tasks.map((task, index) => (
                  <li key={task + index}>{task}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
