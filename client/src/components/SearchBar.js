import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import InputField from './InputField'

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}

export default function SearchBar({ onChange }) {
  return (
    <Wrapper>
      <InputStyled
        name="search"
        labelText="Filter entries:"
        placeholder="Type the skills you are looking for..."
        onChange={onChange}
        autoComplete="off"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 10px 10px;
`

const InputStyled = styled(InputField)`
  :valid {
    background-color: white;
  }
`
