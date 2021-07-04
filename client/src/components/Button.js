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
  color: ${props => props.theme.colors.fontcolor};
  margin: 10px;
  padding: 5px 12px;
  border: none;
  box-shadow: 3px 3px var(--contrast_color);
  background: ${props =>
    props.isActive ? props.theme.colors.active : props.theme.colors.background};
  color: ${props => props.theme.colors.fontcolor};
  text-decoration: none;
  text-align: center;
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
