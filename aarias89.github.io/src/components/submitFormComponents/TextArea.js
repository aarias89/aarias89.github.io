import React from "react"
import Form from "react-bootstrap/Form"

const TextArea = props => {
  let formControl = "form-control"

  if (props.touched && !props.valid) {
    formControl = "form-control control-error"
  }

  return (
    <Form.Group>
      <Form.Label>{props.labelName}</Form.Label>
      <textarea {...props} rows="3" className={formControl} />
    </Form.Group>
  )
}

export default TextArea
