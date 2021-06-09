import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

User.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string,
  department: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
}

export default function User({ id, name, phone, mail, department, skills }) {
  return (
    <Wrapper>
      <Details>
        <span>{id}</span>
        <span>Name: {name}</span>
        <span>Phone: {phone}</span>
        <span>Mail: {mail}</span>
        <span>Department: {department}</span>
        <SkillsList>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </SkillsList>
      </Details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  background-color: var(--background_light);
  color: var(--fontcolor_light);
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
`

const SkillsList = styled.li`
  display: flex;
  gap: 10px;
  list-style-type: none;
`
