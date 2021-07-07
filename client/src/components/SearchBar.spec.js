import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders a inputfield', () => {
    const handleOnChange = jest.fn()
    render(
      <SearchBar
        name="search"
        labelText="Filter entries:"
        onChange={handleOnChange}
      />
    )
    expect(screen.getByLabelText('Filter entries:')).toBeInTheDocument()
  })
})
