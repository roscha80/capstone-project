import NavBar from './NavBar'
export default {
  title: 'NavBar',
  component: NavBar,
}

const Template = args => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {
  currentPageId: 'one',
  pages: [
    { title: 'Eins', id: 'one' },
    { title: 'Zwei', id: 'two' },
    { title: 'Drei', id: 'three' },
  ],
}
