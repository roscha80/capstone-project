import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders a header with text', () => {
    const text = 'Headline'
    render(<Header>{text}</Header>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Headline'
    )
  })
})
