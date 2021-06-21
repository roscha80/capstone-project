import styled from 'styled-components/macro'
import Header from '../components/Header'

export default function HomePage({ title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <h2>INSIDE JOB</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  height: 100vh;
  background: var(--background_dark);
`
