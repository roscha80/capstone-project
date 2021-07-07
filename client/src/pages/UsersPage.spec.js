import { render, screen } from '@testing-library/react'
import UsersPage from './UsersPage'

describe('UserPage', () => {
  it('renders two users', () => {
    render(
      <UsersPage
        users={[
          {
            key: 'TestId_1',
            name: 'Rob',
            phone: '123',
            email: 'a@b.de',
            department: 'office',
            skills: ['HTML', 'CSS', 'JavaScript', 'Adobe CS', 'Paint', 'IOS'],
          },
          {
            key: 'TestId_2',
            name: 'Jane Johnson',
            phone: '222222222',
            email: 'Jane@mail.com',
            department: 'Office',
            skills: [
              'skill1',
              'skill2',
              'skill3',
              'skill4',
              'skill5',
              'skill6',
            ],
          },
        ]}
      />
    )
    const listItems = screen.getAllByRole('list')
    expect(listItems).toHaveLength(3)
  })
})
