import styled from 'styled-components/macro'

export default function Header({ children }) {
  return <HeadLine>{children}</HeadLine>
}

const HeadLine = styled.h1`
  font-size: 1.75rem;
  background: var(--background_light);
  color: var(--fontcolor_light);
  padding: 10px;
  text-align: center;
`
