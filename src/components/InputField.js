import styled from 'styled-components/macro'

export default function InputField({ label, ...inputProps }) {
  return (
    <Label>
      <small>{label}</small>
      <input {...inputProps} />
    </Label>
  )
}

const Label = styled.label`
  padding: 10px;
  width: auto;
  margin: 0;
`
