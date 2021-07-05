import styled from 'styled-components/macro'

import Header from '../components/Header'
import Button from '../components/Button'

import logo from '../images/Logo_1C.png'

export default function HomePage({ title, onThemeClick }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <LogoWrapper>
        <StyledLogo src={logo} alt="image" />

        <H2Styled>Skills</H2Styled>
        <StyledP>
          the bigger a company is, the less is known about the individual
          employees. a lot of skills remain hidden and problems that could be
          solved internally are solved by external people. this causes
          unnecessary costs. with the skills app i make the invisible skills
          visible.
        </StyledP>
      </LogoWrapper>
      <ButtonStyled onClick={onThemeClick}>
        {'\u25CF'}
        {'|'}
        {'\u25CB'}
      </ButtonStyled>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 60px auto 160px;
  height: 100vh;
  background: var(--background);
`

const LogoWrapper = styled.div`
  justify-self: center;
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--fontcolor_contrast);
`

const H2Styled = styled.h2`
  color: var(--fontcolor);
`

const StyledP = styled.p`
  color: var(--fontcolor_switch);
  margin: 0 10px 0 10px;
`

const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
`

const ButtonStyled = styled(Button)`
  width: 60px;
  height: 30px;
  background: var(--background_switch);
  color: var(--fontcolor_switch);
`
