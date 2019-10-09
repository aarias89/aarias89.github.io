import React, { Component } from "react"
import { Modal, Button } from "react-bootstrap"
import PDF from "react-pdf-js"
import Resume from "../images/ResumeAriasAndres2019.pdf"

class MyModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Andres Resume
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <PDF file="https://dl.dropbox.com/s/gach2termfhyn3f/ResumeAriasAndres2019.pdf?dl=0" /> */}

          <PDF className="justify-content-md-center" file={Resume} />
        </Modal.Body>
        <Modal.Footer>
          <Button href={Resume} download>
            Download PDF
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyModal
