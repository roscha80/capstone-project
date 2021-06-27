import { NavLink } from 'react-router-dom'

import styled from 'styled-components/macro'
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
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  justify-content: center;
  border: solid var(--contrast_color);
  border-width: 5px 0 0 0;
`
