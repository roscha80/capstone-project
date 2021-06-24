import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import { MemoryRouter as Router } from 'react-router-dom'

describe('NavBar', () => {
  it('renders three NavLinks', async () => {
    render(
      <Router>
        <NavBar
          currentPageId="1"
          pages={[
            { title: 'One', id: '1' },
            { title: 'Two', id: '2' },
            { title: 'Three', id: '3' },
          ]}
        />
      </Router>
    )
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveTextContent('One')
    expect(links[1]).toHaveTextContent('Two')
    expect(links[2]).toHaveTextContent('Three')
  })
})
