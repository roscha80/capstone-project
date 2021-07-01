import styled from 'styled-components/macro'

import Header from '../components/Header'

import image from '../images/Logo_1C.png'

export default function HomePage({ title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <LogoWrapper>
        <StyledLogo src={image} alt="image" />
        <h2>Skills</h2>
        <p>
          the bigger a company is, the less is known about the individual
          employees. a lot of skills remain hidden and problems that could be
          solved internally are solved by external people. this causes
          unnecessary costs. with the skills app i make the invisible skills
          visible.
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
  justify-self: center;
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--contrast_color);
`

const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
`
