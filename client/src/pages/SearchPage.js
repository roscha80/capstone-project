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
  onChange: PropTypes.func,
}

export default function SearchPage({ users, title, onChange }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <SearchBarWrapper>
        <SearchBar onChange={onChange} />
      </SearchBarWrapper>
      <ListWrapper>
        {users &&
          users.map(({ _id, skills, name, phone, email, department }) => (
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
  background: ${props => props.theme.colors.background};
  display: grid;
  grid-template-rows: 60px auto;
  overflow-y: scroll;
`
const SearchBarWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
`
const ListWrapper = styled.ul`
  background-color: ${props => props.theme.colors.background};
  padding-bottom: 10px;
`
const SingleEntry = styled.li`
  background-color: ${props => props.theme.colors.background_switch};
  padding: 10px;
`
