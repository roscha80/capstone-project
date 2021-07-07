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
          <ButtonStyled exact component={NavLink} to={id} key={id}>
            {title}
          </ButtonStyled>
        ))}
      </Wrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: var(--background_switch);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  justify-content: center;
  border: solid var(--background_contrast);
  border-width: 5px 0 0 0;
`

const Wrapper = styled.div`
  margin: 12px 0 20px 0;
  @media (max-width: 768px) {
    scale: 90%;
  }
`

const ButtonStyled = styled(Button)`
  padding: 5px 10px;
  @media (max-width: 360px) {
    scale: 70%;
  }
`
