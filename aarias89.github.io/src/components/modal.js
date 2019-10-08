import React, { Component } from "react"
import { Modal, Button } from "react-bootstrap"
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
          <Modal.Title id="contained-modal-title-vcenter">Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Modal Component..Add Resume PDF here</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyModal
