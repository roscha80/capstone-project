import User from './User'
export default {
  title: 'User',
  component: User,
}

const Template = args => <User {...args} />

export const Default = Template.bind({})
Default.args = {
  id: '1',
  name: 'Rob',
  phone: '123',
  mail: 'a@b.de',
  department: 'office',
  skills: ['HTML', 'CSS', 'JavaScript', 'Adobe CS', 'Paint', 'IOS'],
}
