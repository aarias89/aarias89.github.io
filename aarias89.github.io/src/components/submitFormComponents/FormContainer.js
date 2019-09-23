import React, { Component } from "react"

import validate from "../../helpers/validate"
import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import TextInput from "./TextInput"
import TextArea from "./TextArea"
import Email from "./Email"

class FormContainer extends Component {
  constructor() {
    super()

    this.state = {
      formIsValid: false,
      formControls: {
        name: {
          value: "",
          placeholder: "name",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        phone: {
          value: "",
          placeholder: "phone number",
          valid: true,
          validationRules: {
            minLength: 0,
            isRequired: false,
          },
        },
        my_email: {
          value: "",
          placeholder: "email",
          valid: false,
          validationRules: {
            isRequired: false,
            isEmail: true,
          },
          touched: false,
        },
        subject: {
          value: "",
          placeholder: "subject",
          valid: false,
          validationRules: {
            minLength: 5,
            isRequired: true,
          },
          touched: false,
        },
        message: {
          value: "",
          placeholder: "message",
          valid: false,
          validationRules: {
            minLength: 5,
            isRequired: true,
          },
          touched: false,
        },
      },
    }
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    const updatedControls = {
      ...this.state.formControls,
    }
    const updatedFormElement = {
      ...updatedControls[name],
    }
    updatedFormElement.value = value
    updatedFormElement.touched = true
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    )

    updatedControls[name] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    })
  }

  formSubmitHandler = () => {
    console.dir(this.state.formControls)
  }

  render() {
    return (
      <div className="container">
        <h3>Contact Me</h3>
        <TextInput
          name="name"
          labelName="Name"
          placeholder={this.state.formControls.name.placeholder}
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.name.touched}
          valid={this.state.formControls.name.valid}
        />
        <Email
          name="my_email"
          labelName="Email"
          placeholder={this.state.formControls.my_email.placeholder}
          value={this.state.formControls.my_email.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.my_email.touched}
          valid={this.state.formControls.my_email.valid}
        />
        <TextInput
          name="phone"
          labelName="Phone Number"
          placeholder="phone number"
          value={this.state.formControls.phone.value}
          onChange={this.changeHandler}
        />
        <TextInput
          name="subject"
          labelName="Subject"
          placeholder={this.state.formControls.subject.placeholder}
          value={this.state.formControls.subject.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.subject.touched}
          valid={this.state.formControls.subject.valid}
        />
        <TextArea
          name="message"
          labelName="Message"
          placeholder="message"
          value={this.state.formControls.message.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.message.touched}
          valid={this.state.formControls.message.valid}
        />
        <ButtonToolbar>
          <Button
            onClick={this.formSubmitHandler}
            disabled={!this.state.formIsValid}
            as="input"
            type="submit"
            value="Submit"
          />
        </ButtonToolbar>
      </div>
    )
  }
}

export default FormContainer
