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
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.bodyData}</Modal.Body>
        <Modal.Footer>
          {this.props.footerData}
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyModal
