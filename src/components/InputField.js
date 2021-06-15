import styled from 'styled-components/macro'

export default function InputField({ labelText, ...inputProps }) {
  return (
    <Label>
      <small>{labelText}</small>
      <input {...inputProps} />
    </Label>
  )
}

const Label = styled.label`
  padding: 2px;
  width: auto;
  margin: 0;
`
