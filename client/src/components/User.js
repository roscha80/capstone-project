import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

User.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string,
  department: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
}

export default function User({
  id,
  name,
  phone,
  mail,
  department,
  skills,
  deleteUser,
}) {
  return (
    <Wrapper>
      <DeleteButtonWrapper>
        <Button children={'X'} onClick={() => deleteUser(id)} />
      </DeleteButtonWrapper>
      <Details>
        <span>Name: {name}</span>
        <span>Phone: {phone}</span>
        <span>Mail: {mail}</span>
        <span>Department: {department}</span>
        <SkillsList>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </SkillsList>
      </Details>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: var(--fontcolor_light);
  width: 100%;
  justify-content: center;
  position: relative;
`

const Details = styled.div`
  background-color: var(--background_light);
  padding: 10px 20px;
  width: 100%;
  display: grid;
  list-style-type: none;
`

const SkillsList = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`

const DeleteButtonWrapper = styled.div`
  background-color: var(--background_dark);
  position: absolute;
  right: -10px;
`
