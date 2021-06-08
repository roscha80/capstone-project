import { render, screen } from '@testing-library/react'
import UsersPage from './UsersPage'

describe('UserPage', () => {
  it('renders', () => {
    render(<UsersPage />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(57)
  })
})
