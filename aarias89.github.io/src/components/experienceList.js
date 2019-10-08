import React, { Component } from "react"
import ExperienceCard from "./experienceCard"
import { ButtonToolbar, Button } from "react-bootstrap"
import MyModal from "./modal"

class ExperienceList extends Component {
  constructor(props) {
    super(props)
    this.state = { addModalShow: false }
  }
  render() {
    let addModalClose = () => this.setState({ addModalShow: false })
    const jobs = this.props.data.map(job => {
      return <ExperienceCard key={job.id} job={job} />
    })
    return (
      <div>
        <h3 id="experience">Experience</h3>
        {jobs}
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Show Resume
          </Button>
          <MyModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
        <br />
      </div>
    )
  }
}

// const ExperienceList = props => {
//   const jobs = props.data.map(job => {
//     return <ExperienceCard key={job.id} job={job} />
//   })

//   return (
//     <div>
//       <h3 id="experience">Experience</h3>
//       {jobs}

//     </div>
//   )
// }

export default ExperienceList
