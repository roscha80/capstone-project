import styled from 'styled-components/macro'
import Button from '../components/Button'
import Form from '../components/Form'

export default function CreatePage({ onGoBack, onSubmit }) {
  return (
    <Wrapper>
      <Button children={'Back'} onClick={onGoBack} />
      <Form onSubmit={onSubmit} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style-type: none;
  max-width: min-content;
`
