import UserData from './UserData'
export default {
  title: 'UserData',
  component: UserData,
}

const Template = args => <UserData {...args} />

export const Default = Template.bind({})
Default.args = {
  personalUserData: ['John Doe', '012345', 'a@b.de', 'Office'],
  skills: ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6'],
}
