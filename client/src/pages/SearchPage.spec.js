import { render, screen } from '@testing-library/react'
import SearchPage from './SearchPage'

describe('SearchPage', () => {
  it('renders a searchbar', () => {
    render(<SearchPage />)
    const searchbar = screen.getByText('Filter entries:')
    expect(searchbar).toBeInTheDocument()
  })
})
