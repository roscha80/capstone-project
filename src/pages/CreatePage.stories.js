
  import CreatePage from './CreatePage'
  export default {
    title: 'CreatePage',
    component: CreatePage
  }

  const Template = args => <CreatePage {...args} />

  export const Default = Template.bind({})
  Default.args = {}
  