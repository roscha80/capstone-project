import styled from 'styled-components/macro'
import User from '../components/User'
import PropTypes from 'prop-types'

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

export default function UsersPage({ users }) {
  return (
    <Wrapper>
      {users.map(({ id, name, phone, email, department, skills }) => (
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  max-width: min-content;
`
const SingleEntry = styled.ul`
  padding: 10px;
`
