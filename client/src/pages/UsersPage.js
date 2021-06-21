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
      mail: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}

export default function UsersPage({ users, title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {users.map(({ skills, id, name, phone, email, department }) => (
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  list-style-type: none;
  height: 100vh;
  align-self: center;
  background: var(--background_dark);
  display: grid;
  grid-auto-rows: repeat;
  overflow-y: scroll;
  margin-bottom: 20px;
`
const SingleEntry = styled.ul`
  padding: 10px;
`
