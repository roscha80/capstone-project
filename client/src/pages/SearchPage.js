import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import User from '../components/User'

SearchPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      mail: PropTypes.string,
      department: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  title: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default function SearchPage({ users, title, onSubmit }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <SearchBarWrapper>
        <SearchBar onSubmit={onSubmit} />
      </SearchBarWrapper>
      <ListWrapper>
        {users.map(({ _id, skills, name, phone, email, department }) => (
          <SingleEntry key={_id}>
            <User
              id={_id}
              name={name}
              phone={phone}
              mail={email}
              department={department}
              skills={skills}
            />
          </SingleEntry>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--background_dark);
  display: grid;
`
const SearchBarWrapper = styled.div``

const ListWrapper = styled.ul`
  padding-bottom: 10px;
`
const SingleEntry = styled.li`
  padding: 10px;
`
