import styled from 'styled-components/macro'
import User from '../components/User'

const data = require('../data/data.json')

const users = data

export default function UsersPage() {
  return (
    <Wrapper>
      {users.map(({ name, phone, email, department }) => (
        <SingleEntry key={name}>
          <User
            name={name}
            phone={phone}
            mail={email}
            department={department}
            skills={[]}
          />
        </SingleEntry>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  align-items: center;
`
const SingleEntry = styled.li`
  padding: 10px;
`
