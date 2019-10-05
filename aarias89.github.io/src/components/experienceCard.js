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
            <Col xs={12} md={7}>
              <p>
                {companyName} , &nbsp;{jobTitle}
              </p>
              <p>
                {date.start} - {date.end}
              </p>
              <ul>
                {tasks.map((task, index) => (
                  <li key={task + index}>{task}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>

        {/* <Container>
          <Row>
            <Col xs={12} md={7}>
              <h3>Relevant Experience</h3>
              <p id="experience-title">{companyName}, Front-End Developer</p>
              <p id="experience-time">Nov 2018 - Present</p>
              <ul id="experince-list">
                <li>
                  Created marketing campaign emails and integrated them to
                  various CRMs (Oracle Responsys, Mailchilp, Braze)
                </li>
                <li>
                  Produced web pages for clients using HTML, CSS, and
                  JavaScript.
                </li>
                <li>
                  Continuously updated email templating engine to increase
                  product volume, reduce errors, and maintain high quality
                  emails.
                </li>
              </ul>
            </Col>
          </Row>
        </Container> */}
      </div>
    )
  }
}
