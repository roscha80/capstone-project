import styled from 'styled-components/macro'

import Header from '../components/Header'
import Button from '../components/Button'

import logo from '../images/Logo_1C.png'

import ThemeLogo from '../images/day-and-night_light.padding'

export default function HomePage({ title, onClick }) {
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
      <ButtonStyled onClick={onClick}>
        Switch Theme
        <ThemeLogoStyled src={ThemeLogo} alt="" />
      </ButtonStyled>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 60px auto 160px;
  height: 100vh;
  background: ${props => props.theme.colors.background};
`
const LogoWrapper = styled.div`
  justify-self: center;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${props => props.theme.colors.contrast_color};
`

const H2Styled = styled.h2`
  color: ${props => props.theme.colors.fontcolor};
`

const StyledP = styled.p`
  color: ${props => props.theme.colors.fontcolor};
  margin: 0 10px 0 10px;
`

const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
`
const ThemeLogoStyled = styled.img`
  width: fit-content;
  height: fit-content;
`

const ButtonStyled = styled(Button)`
  width: 150px;
  height: 30px;
  background: ${props => props.theme.colors.background_switch};
  color: ${props => props.theme.colors.fontcolor_switch};
`
