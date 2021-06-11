import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('renders a form', () => {
    render(<Form />)
    expect(screen.getByRole('form')).toBeInTheDocument()

    const inputEl = screen.getAllByRole('input')
    expect(inputEl).toHaveLength(10)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
