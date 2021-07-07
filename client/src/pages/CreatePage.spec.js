import { render, screen } from '@testing-library/react'

import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders a form and submit button', () => {
    render(<CreatePage />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
