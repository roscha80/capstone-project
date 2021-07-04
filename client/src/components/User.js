import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import Button from './Button'

User.propTypes = {
  deleteUser: PropTypes.func,
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
      {deleteUser ? (
        <DeleteButtonWrapper>
          <ButtonStyled onClick={() => deleteUser(id)}>X</ButtonStyled>
        </DeleteButtonWrapper>
      ) : (
        ''
      )}

      <Details>
        <dl>
          <span>
            <dd>Name: {name}</dd>
          </span>
          <span>
            <dd>
              Phone: <HrefStyled href={`tel:${phone}`}>{phone}</HrefStyled>
            </dd>
          </span>
          <span>
            <dd>
              Mail: <HrefStyled href={`mailto:${mail}`}>{mail}</HrefStyled>
            </dd>
          </span>
          <span>
            <dd>Department: {department}</dd>
          </span>
        </dl>
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
  color: ${props => props.theme.colors.fontcolor_switch};
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  justify-content: center;
  position: relative;
`

const Details = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.fontcolor};
  padding: 10px 20px;
  width: 100%;
  display: grid;
  list-style-type: none;
`

const SkillsList = styled.ul`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style-type: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const DeleteButtonWrapper = styled.div`
  background-color: ${props => props.theme.colors.background_switch};
  position: absolute;
  right: -10px;
`

const ButtonStyled = styled(Button)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.fontcolor};
`

const HrefStyled = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.contrast_color};
`
