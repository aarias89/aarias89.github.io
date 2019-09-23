import React from "react"
import Form from "react-bootstrap/Form"

const TextInput = props => {
  let formControl = "form-control"
  if (props.touched && !props.valid) {
    formControl = "form-control control-error"
  }
  return (
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>{props.labelName}</Form.Label>
      <Form.Control className={formControl} type="text" {...props} />
    </Form.Group>
  )
}

export default TextInput
