import { render, screen } from '@testing-library/react'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders a button', () => {
    render(<CreatePage />)
    const buttonGoBack = screen.getByText('Back')
    expect(buttonGoBack).toBeInTheDocument()
    const buttonCreateNew = screen.getByText('Create User')
    expect(buttonCreateNew).toBeInTheDocument()
  })
  it('renders a form', () => {
    render(<CreatePage />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })
})
