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
  color: var(--fontcolor_light);
  margin: 10px;
  padding: 5px 12px;
  border: none;
  box-shadow: 3px 3px var(--contrast_color);
  background: ${props =>
    props.isActive ? 'var(--active)' : 'var(--background_light)'};
  color: ${props => props.color};
  text-decoration: none;
  text-align: center;
  &:hover {
    background: pink;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
