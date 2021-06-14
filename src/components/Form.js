import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import InputField from './InputField'
import Button from './Button'
import styled from 'styled-components'
import { useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React from 'react'

Form.propTypes = {
  onSubmit: PropTypes.func,
}

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().required(),
  department: yup.string().required(),
  skill1: yup.string().required(),
  skill2: yup.string(),
  skill3: yup.string(),
  skill4: yup.string(),
  skill5: yup.string(),
  skill6: yup.string(),
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
        label="name:"
        role="input"
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.name && 'Name is required'}
      <InputField
        label="phone:"
        role="input"
        {...register('phone', {
          required: true,
          min: 11,
          max: 18,
          patter: /^[0-9]+$/,
        })}
      />
      {errors.phone && 'Phone is required'}
      <InputField
        label="email:"
        role="input"
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        })}
      />
      {errors.email && 'Email is required'}
      <InputField
        label="department:"
        role="input"
        {...register('department', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.department && 'Department is required'}
      <InputField
        label="skill1:"
        role="input"
        {...register('skill1', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.skill1 && 'At least one skill is required'}
      <InputField
        label="skill:"
        role="input"
        {...register('skill2', {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <InputField
        label="skill:"
        role="input"
        {...register('skill3', {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <InputField
        label="skill:"
        role="input"
        {...register('skill4', {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <InputField
        label="skill:"
        role="input"
        {...register('skill5', {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <InputField
        label="skill:"
        role="input"
        {...register('skill6', {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
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
    const skill1 = inputs.skill1.value
    const skill2 = inputs.skill2.value
    const skill3 = inputs.skill3.value
    const skill4 = inputs.skill4.value
    const skill5 = inputs.skill5.value
    const skill6 = inputs.skill6.value
    const skills = [skill1, skill2, skill3, skill4, skill5, skill6]

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
    const inputSkill1 = form.elements.skill1.value.trim()
    setIsDisabled(
      inputName && inputPhone && inputEmail && inputDepartment && inputSkill1
        ? false
        : true
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
