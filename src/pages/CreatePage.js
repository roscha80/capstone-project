import styled from 'styled-components/macro'
import Form from '../components/Form'
import React from 'react'

export default function CreatePage({ onSubmit, onChange }) {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit} onChange={onChange} />
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
