import styled from 'styled-components/macro'
import Header from '../components/Header'

export default function HomePage({ title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <LogoWrapper>
        <h2>Skills</h2>
        <p>
          the bigger a company is, the less is known about the individual
          employees. a lot of skills remain hidden and problems that could be
          solved internally are solved by external people. this causes
          unnecessary costs. with skills we make the invisible skills visible.
        </p>
      </LogoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 60px auto 160px;
  height: 100vh;
  background: var(--background_dark);
`
const LogoWrapper = styled.div`
  justify-content: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--contrast_color);
`