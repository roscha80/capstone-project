import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  component: PropTypes.any,
  disabled: PropTypes.bool,
}

export default function Button({ component: Component = 'button', ...props }) {
  return <ButtonStyled as={Component} {...props} />
}

const ButtonStyled = styled.button`
  color: var(--fontcolor);
  margin: 10px;
  padding: 5px 12px;
  border: none;
  box-shadow: 3px 3px var(--background_contrast);
  background: var(--button);
  color: var(--fontcolor);
  text-decoration: none;
  text-align: center;
  &:hover {
    background: var(--background_highlight);
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
