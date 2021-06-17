import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

NavBar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
}

export default function NavBar({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, id }) => (
        <Button exact component={NavLink} to={id} key={id}>
          {title}
        </Button>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: var(--background_dark);
`
