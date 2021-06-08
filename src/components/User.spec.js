import { render, screen } from '@testing-library/react'
import User from './User'

const data = require('../data/data.json')

const users = data

describe('User', () => {
  it('renders a list with personal data and skills', () => {
    render(<User userData={users.map(user => user)} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(18)
  })
})
