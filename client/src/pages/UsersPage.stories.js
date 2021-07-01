import UsersPage from './UsersPage'
export default {
  title: 'Pages/UsersPage',
  component: UsersPage,
}

const Template = args => <UsersPage {...args} />

export const Default = Template.bind({})
Default.args = {
  users: [
    {
      id: '1',
      name: 'Rob',
      phone: '123',
      mail: 'a@b.de',
      department: 'office',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Adobe CS',
        'Paint',
        'IOS',
        'HTML',
        'CSS',
        'JavaScript',
        'Adobe CS',
        'Paint',
        'IOS',
      ],
    },
    {
      id: '2',
      name: 'Jane Johnson',
      phone: '222222222',
      email: 'Jane@mail.com',
      department: 'Office',
      skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'],
    },
  ],
}
