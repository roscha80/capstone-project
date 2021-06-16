import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders a header with text', () => {
    const text = 'Headline'
    render(<Header children={text} />)
    expect(screen.getByText('Headline')).toBeInTheDocument()
  })
})
