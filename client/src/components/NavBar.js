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
      <Wrapper>
        {pages.map(({ title, id }) => (
          <Button exact component={NavLink} to={id} key={id}>
            {title}
          </Button>
        ))}
      </Wrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: ${props => props.theme.colors.background_switch};
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  justify-content: center;
  border: solid ${props => props.theme.colors.contrast_color};
  border-width: 5px 0 0 0;
`

const Wrapper = styled.div`
  margin: 12px 0 20px 0;
  @media (max-width: 768px) {
    scale: 90%;
  }
`
