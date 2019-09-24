import React from "react"
import Form from "react-bootstrap/Form"

const Email = props => {
  let formControl = "form-control"

  if (props.touched && !props.valid) {
    formControl = "form-control control-error"
  }

  return (
    <Form.Group>
      <Form.Label>{props.labelName}</Form.Label>
      <input type="email" className={formControl} {...props} />
    </Form.Group>
  )
}

export default Email
