import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import InputField from './InputField'

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}

export default function SearchBar({ onSubmit, placeholder }) {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <InputField
          name="search"
          labelText="Filter entries:"
          placeholder={placeholder}
        />
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Form = styled.form``
