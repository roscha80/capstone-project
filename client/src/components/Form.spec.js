import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('renders a form', () => {
    render(<Form />)
    expect(screen.getByRole('form')).toBeInTheDocument()

    const inputName = screen.getByText('name:')
    expect(inputName).toBeInTheDocument()
    const inputPhone = screen.getByText('phone:')
    expect(inputPhone).toBeInTheDocument()
    const inputEmail = screen.getByText('email:')
    expect(inputEmail).toBeInTheDocument()
    const inputDepartment = screen.getByText('department:')
    expect(inputDepartment).toBeInTheDocument()
    const inputSkills = screen.getByText('skills:')
    expect(inputSkills).toBeInTheDocument()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
