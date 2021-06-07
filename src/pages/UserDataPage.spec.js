import { render, screen } from '@testing-library/react'
import UserDataPage from './UserDataPage'

describe('UserDataPage', () => {
  it('renders a list with a userDataObject', () => {
    render(
      <UserDataPage
        personalUserData={['John Doe', '012345', 'a@babel.de', 'Office']}
        skills={['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6']}
      />
    )
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(33)
    expect(listItems[1]).toHaveTextContent('John Doe')
    expect(listItems[2]).toHaveTextContent('012345')
    expect(listItems[3]).toHaveTextContent('a@babel.de')
    expect(listItems[4]).toHaveTextContent('Office')
    expect(listItems[5]).toHaveTextContent('SKILL1')
    expect(listItems[6]).toHaveTextContent('SKILL2')
    expect(listItems[7]).toHaveTextContent('SKILL3')
    expect(listItems[8]).toHaveTextContent('SKILL4')
    expect(listItems[9]).toHaveTextContent('SKILL5')
    expect(listItems[10]).toHaveTextContent('SKILL6')
  })
})
