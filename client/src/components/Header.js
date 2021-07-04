import styled from 'styled-components/macro'

export default styled.h1`
  font-size: 1.75rem;
  background: ${props => props.theme.colors.background_switch};
  color: ${props => props.theme.colors.fontcolor_switch};
  padding: 10px;
  text-align: center;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0 3px var(--contrast_color);
  z-index: 1;
`
