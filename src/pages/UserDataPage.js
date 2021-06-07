import styled from 'styled-components/macro'
import UserData from '../components/UserData'

export default function UserDataPage({ personalUserData, skills }) {
  return (
    <Grid>
      <SingleEntry>
        <UserData
          personalUserData={['John Doe', '012345', 'a@babel.de', 'Office']}
          skills={['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6']}
        />
      </SingleEntry>
      <SingleEntry>
        <UserData
          personalUserData={['Jane Doe', '018000273664', 'jane@web.de', 'Post']}
          skills={['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4']}
        />
      </SingleEntry>
      <SingleEntry>
        <UserData
          personalUserData={[
            'Peter Parker',
            '007 007 007',
            'peter@spider.web',
            'Kitchen',
          ]}
          skills={['SKILL1', 'SKILL2']}
        />
      </SingleEntry>
    </Grid>
  )
}

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  align-items: center;
`

const SingleEntry = styled.li`
  padding: 10px;
`
