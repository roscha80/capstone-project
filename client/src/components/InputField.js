import styled from 'styled-components/macro'

export default function InputField({ labelText, name, ...inputProps }) {
  return (
    <Label>
      <small>{labelText}</small>
      <Input name={name} {...inputProps} />
    </Label>
  )
}

const Label = styled.label`
  padding: 2px;
  width: auto;
  margin: 0;
  display: grid;
`
const Input = styled.input`
  :required {
    background-color: var(--highlight);
  }
  :valid {
    background-color: palegreen;
  }
`
