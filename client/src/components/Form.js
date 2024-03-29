import { useState } from 'react'

import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import InputField from './InputField'
import Button from './Button'

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default function Form({ onSubmit }) {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <FormStyled
      aria-label="create a new user"
      onSubmit={handleSubmit}
      onChange={validateForm}
      role="form"
    >
      <InputField
        name="name"
        labelText="full name:"
        placeholder="Please enter your full name..."
        minLength="5"
        maxLength="40"
        required
        autoComplete="off"
      />
      <InputField
        name="phone"
        labelText="phone:"
        placeholder="Please enter your phone number..."
        minLength="8"
        required
        autoComplete="off"
      />
      <InputField
        name="email"
        type="email"
        labelText="email:"
        placeholder="Please enter your email..."
        required
        pattern="^(.+)@(.+)$"
        autoComplete="off"
      />
      <InputField
        name="department"
        labelText="department:"
        placeholder="Please enter your department..."
        required
        autoComplete="off"
      />
      <InputField
        name="skills"
        labelText="skills:"
        placeholder="Please enter your skills separated by comma..."
        required
        autoComplete="off"
      />

      <ButtonStyled
        disabled={isDisabled}
        type="submit"
        children="Create User"
      />
    </FormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const inputs = form.elements
    const name = inputs.name.value
    const phone = inputs.phone.value
    const email = inputs.email.value
    const department = inputs.department.value
    const skills = inputs.skills.value.split(', ')

    const newUser = { name, phone, email, department, skills }

    onSubmit(newUser)

    form.reset()
    inputs.name.focus()
    setIsDisabled(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputs = form.elements
    const inputName = inputs.name.value.trim()
    const inputPhone = inputs.phone.value.trim()
    const inputEmail = inputs.email.value.trim()
    const inputDepartment = inputs.department.value.trim()
    const inputSkills = inputs.skills.value.trim()

    setIsDisabled(
      inputName && inputPhone && inputEmail && inputDepartment && inputSkills
        ? false
        : true
    )
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: var(--background);
  padding: 0 10px;
`

const ButtonStyled = styled(Button)`
  background: var(--background_switch);
  color: var(--fontcolor_switch);
`
