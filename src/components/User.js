import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const data = require('../data/data.json')

const users = data

User.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      mail: PropTypes.string,
      department: PropTypes.string.isRequired,
    })
  ),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill1: PropTypes.string.isRequired,
      skill2: PropTypes.string,
      skill3: PropTypes.string,
      skill4: PropTypes.string,
      skill5: PropTypes.string,
      skill6: PropTypes.string,
    })
  ),
}

export default function User() {
  return (
    <Wrapper>
      {users.map(({ id, name, phone, email, department, skills }, index) => (
        <Details>
          <li key={index}>{id}</li>
          <li>Name: {name}</li>
          <li>Phone: {phone}</li>
          <li>Mail: {email}</li>
          <li>Department: {department}</li>
          <SkillsList>
            {skills.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </SkillsList>
        </Details>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: max-content;
  gap: 20px;
  padding: 10px 20px;
  background-color: var(--background_light);
  color: var(--fontcolor_light);
`

const Details = styled.ul`
  display: grid;
  gap: 10px;
  list-style-type: none;
`

const SkillsList = styled.li`
  display: flex;
  gap: 10px;
  list-style-type: none;
`
