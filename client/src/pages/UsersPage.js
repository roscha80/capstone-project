import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import User from '../components/User'
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

export default function UsersPage({ users, title, deleteUser }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
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
              deleteUser={deleteUser}
            />
          </SingleEntry>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  list-style-type: none;
  background-color: var(--background_active);
  display: grid;
  overflow-y: scroll;
`
const ListWrapper = styled.ul`
  padding-bottom: 10px;
`
const SingleEntry = styled.li`
  background-color: var(--background_switch);
  padding: 10px;
`
