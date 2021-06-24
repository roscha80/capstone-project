import styled from 'styled-components/macro'
import User from '../components/User'
import PropTypes from 'prop-types'
import Header from '../components/Header'

UsersPage.propTypes = {
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
}

export default function UsersPage({ users, title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <ListWrapper>
        {users.map(({ id, skills, name, phone, email, department }) => (
          <SingleEntry key={id}>
            <User
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
  list-style-type: none;
  background: var(--background_dark);
  display: grid;
  overflow-y: scroll;
`
const ListWrapper = styled.ul`
  height: max-content;
  padding-bottom: 10px;
`
const SingleEntry = styled.li`
  padding: 10px;
`
