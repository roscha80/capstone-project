import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import InputField from './InputField'
import Button from './Button'
import styled from 'styled-components/macro'
import { useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

Form.propTypes = {
  onSubmit: PropTypes.func,
}

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().required(),
  department: yup.string().required(),
  skills: yup.object().shape({ skills: yup.array() }).required(),
})

export default function Form({ onSubmit }) {
  const ref = useRef(null)
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <StyledForm
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="create a new user"
      role="form"
      ref={ref}
    >
      <InputField
        labelText="name:"
        placeholder="Please enter your name..."
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.name && <Error>Name is required</Error>}
      <InputField
        labelText="phone:"
        placeholder="Please enter your phone..."
        {...register('phone', {
          required: true,
          min: 11,
          max: 18,
          // eslint-disable-next-line no-control-regex
          patter: /^[0-9]+$/,
        })}
      />
      {errors.phone && <Error>Phone is required</Error>}
      <InputField
        labelText="email:"
        placeholder="Please enter your email..."
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        })}
      />
      {errors.email && <Error>Email is required</Error>}
      <InputField
        labelText="department:"
        placeholder="Please enter your department..."
        {...register('department', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.department && 'Department is required'}
      <InputField
        labelText="skills:"
        placeholder="Please enter your skills..."
        {...register('skills', {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.skill1 && <Error>At least one skill is required</Error>}

      <Button disabled={isDisabled} type="submit" children="Create User" />
    </StyledForm>
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
    event.target.elements.name.focus()
    setIsDisabled(false)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputName = form.elements.name.value.trim()
    const inputPhone = form.elements.phone.value.trim()
    const inputEmail = form.elements.email.value.trim()
    const inputDepartment = form.elements.department.value.trim()
    const inputSkills = form.elements.skills.value.trim()
    setIsDisabled(
      inputName && inputPhone && inputEmail && inputDepartment && inputSkills
        ? false
        : true
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 80px;
  background: var(--background_dark);
`

const Error = styled.div`
  color: red;
`
