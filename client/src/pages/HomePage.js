import styled from 'styled-components/macro'
import Header from '../components/Header'

export default function HomePage({ title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <LogoWrapper>
        <h2>Skills</h2>
      </LogoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
  background: var(--background_dark);
`
const LogoWrapper = styled.div`
  justify-self: center;
  margin-top: 50%;
`
