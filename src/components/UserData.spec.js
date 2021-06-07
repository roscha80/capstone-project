import { render, screen } from '@testing-library/react'
import UserData from './UserData'

describe('UserData', () => {
  it('renders a List with personal data and a skills', () => {
    render(
      <UserData
        personalUserData={[
          'Peter Parker',
          '007 007 007',
          'peter@spider.web',
          'Kitchen',
        ]}
        skills={['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6']}
      />
    )

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(10)
    expect(listItems[0]).toHaveTextContent('Peter Parker')
    expect(listItems[1]).toHaveTextContent('007 007 007')
    expect(listItems[2]).toHaveTextContent('peter@spider.web')
    expect(listItems[3]).toHaveTextContent('Kitchen')
    expect(listItems[4]).toHaveTextContent('SKILL1')
    expect(listItems[5]).toHaveTextContent('SKILL2')
    expect(listItems[6]).toHaveTextContent('SKILL3')
    expect(listItems[7]).toHaveTextContent('SKILL4')
    expect(listItems[8]).toHaveTextContent('SKILL5')
    expect(listItems[9]).toHaveTextContent('SKILL6')
  })
})
