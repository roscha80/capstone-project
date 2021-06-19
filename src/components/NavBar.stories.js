import NavBar from './NavBar'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'NavBar',
  component: NavBar,
}

const Template = args => (
  <Router>
    <NavBar {...args} />
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  currentPageId: 'one',
  pages: [
    { title: 'Eins', id: 'one' },
    { title: 'Zwei', id: 'two' },
    { title: 'Drei', id: 'three' },
  ],
}
