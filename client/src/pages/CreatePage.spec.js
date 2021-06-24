import { render, screen } from '@testing-library/react'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders a form', () => {
    render(<CreatePage />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })
})
