import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

UserData.propTypes = {
  personalUserData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
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

export default function UserData({ personalUserData, skills }) {
  return (
    <DataWrapper>
      <UserDates>
        <li>Name: {personalUserData[0]}</li>
        <li>Phone: {personalUserData[1]}</li>
        <li>Mail: {personalUserData[2]}</li>
        <li>Department: {personalUserData[3]}</li>
      </UserDates>
      <SkillsList>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
        <li>{skills[4]}</li>
        <li>{skills[5]}</li>
      </SkillsList>
    </DataWrapper>
  )
}

const DataWrapper = styled.div`
  display: grid;
  width: max-content;
  gap: 20px;
  padding: 10px 20px;
  background-color: var(--background_light);
  color: var(--fontcolor_light);
`

const UserDates = styled.ul`
  display: grid;
  gap: 10px;
  list-style-type: none;
`

const SkillsList = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`
