import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  it('renders a form', () => {
    render(<Form />)
    expect(screen.getByRole('form')).toBeInTheDocument()

    const inputName = screen.getByText('full name:')
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
  it('calls submit correctly', () => {
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit} />)
    const inputName = 
    userEvent.type(screen.getByText('full name:'), 'Test Name')
    userEvent.type(screen.getByText('phone:'), '0123456789')
    userEvent.type(screen.getByText('email:'), 'email@test.de')
    userEvent.type(screen.getByText('department:'), 'TestLab')
    userEvent.type(screen.getByText('skills:'), 'Skill')
    const button = screen.getByText('Create User')
    userEvent.click(button)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
