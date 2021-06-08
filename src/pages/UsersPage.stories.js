import UsersPage from './UsersPage'
export default {
  title: 'Pages/UsersPage',
  component: UsersPage,
}

const Template = args => <UsersPage {...args} />

export const Default = Template.bind({})
Default.args = {
  userData: ['John Doe', '012345', 'a@b.de', 'Office'],
  skills: ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6'],
}
