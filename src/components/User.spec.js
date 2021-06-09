import { render, screen } from '@testing-library/react'
import User from './User'

describe('User', () => {
  it('renders a list with personal data and skills', () => {
    render(
      <User
        id={'1'}
        name={'Rob'}
        phone={'123'}
        mail={'a@b.de'}
        department={'office'}
        skills={['HTML', 'CSS', 'JavaScript', 'Adobe CS', 'Paint', 'IOS']}
      />
    )
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(7)
  })
})
