import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import InputField from './InputField'

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}

export default function SearchBar({ onSubmit, onChange }) {
  return (
    <Wrapper>
      <InputField
        name="search"
        labelText="Filter entries:"
        placeholder="Type the skill your are looking for..."
        required={false}
        valid={false}
        onChange={onChange}
        aautoComplete="off"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
`
