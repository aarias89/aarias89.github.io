import React, { Component } from "react"
import ExperienceCard from "./experienceCard"
import { ButtonToolbar, Button } from "react-bootstrap"
import MyModal from "./modal"
import PDF from "react-pdf-js"
import Resume from "../images/ResumeAriasAndres2019.pdf"

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

          <MyModal
            modaltitle="Andres Resume"
            bodydata={
              <PDF className="justify-content-md-center" file={Resume} />
            }
            footerdata={
              <Button href={Resume} download>
                Download PDF
              </Button>
            }
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
        <br />
      </div>
    )
  }
}

//{/* <PDF file="https://dl.dropbox.com/s/gach2termfhyn3f/ResumeAriasAndres2019.pdf?dl=0" /> */}

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
