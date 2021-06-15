import styled from 'styled-components/macro'
import Button from '../components/Button'
import Form from '../components/Form'
import React from 'react'

export default function CreatePage({ onGoBack, onSubmit, onChange }) {
  const ref = React.forwardRef()
  return (
    <Wrapper>
      <Button children={'Back'} onClick={onGoBack} />
      <Form onSubmit={onSubmit} onChange={onChange} ref={ref} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style-type: none;
  max-width: min-content;
  max-height: 100%;
`
