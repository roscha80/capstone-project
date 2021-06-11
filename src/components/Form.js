import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import InputField from './InputField'
import Button from './Button'
import styled from 'styled-components'
import { useState } from 'react'

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default function Form({ onSubmit }) {
  const {
    register,
    formState: { errors },
  } = useForm()
  const [isActive, setIsActive] = useState()

  return (
    <StyledForm
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="create a new user"
      role="form"
    >
      <InputField
        label="name:"
        role="input"
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
        {...(errors.name && <p>Please fill in your name</p>)}
      />
      <InputField
        label="phone:"
        role="input"
        {...register('phone', {
          required: true,
          min: 11,
          max: 18,
        })}
      />
      <InputField
        label="email:"
        role="input"
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        })}
      />
      <InputField
        label="department:"
        role="input"
        {...register('department', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <InputField
        label="skill1:"
        role="input"
        {...register('skill1', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
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
      <Button disabled={isActive} type="submit" children="Create User" />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const name = form.elements.name.value
    const phone = form.elements.phone.value
    const email = form.elements.email.value
    const department = form.elements.department.value
    const skill1 = form.elements.skill1.value
    const skill2 = form.elements.skill2.value
    const skill3 = form.elements.skill3.value
    const skill4 = form.elements.skill4.value
    const skill5 = form.elements.skill5.value
    const skill6 = form.elements.skill6.value
    const skills = [skill1, skill2, skill3, skill4, skill5, skill6]

    const newUser = { name, phone, email, department, skills }

    onSubmit(newUser)

    form.reset()
    event.target.elements.name.focus()
    setIsActive(false)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputName = form.elements.name.value.trim()
    const inputPhone = form.elements.phone.value.trim()
    const inputEmail = form.elements.email.value.trim()
    const inputDepartment = form.elements.department.value.trim()
    const inputSkill1 = form.elements.skill1.value.trim()
    setIsActive(
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
