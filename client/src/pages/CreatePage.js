import styled from 'styled-components/macro'

import Form from '../components/Form'
import Header from '../components/Header'

export default function CreatePage({ onSubmit, onChange, title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Form onSubmit={onSubmit} onChange={onChange} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 60px auto;
  list-style-type: none;
  height: 100vh;
  align-self: center;
  background: ${props => props.theme.colors.background};
`
