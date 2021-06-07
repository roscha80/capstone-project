import UserDataPage from './UserDataPage'
export default {
  title: 'Pages/UserDataPage',
  component: UserDataPage,
}

const Template = args => <UserDataPage {...args} />

export const Default = Template.bind({})
Default.args = {
  personalUserData: ['John Doe', '012345', 'a@babel.de', 'Office'],
  skills: ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6'],
}
