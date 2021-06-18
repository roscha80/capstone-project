import { Switch, Route, useHistory } from 'react-router-dom'

import styled from 'styled-components/macro'
import useLocalStorage from './hooks/useLocalStorage'

import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

function App() {
  const [users, setUsers] = useLocalStorage('users', [])
  const history = useHistory()

  return (
    <AppWrapper>
      <Switch>
        <Route path="/home" exact component={HomePage}>
          <HomePage title="Home" />
        </Route>
        <Route path="/createPage" component={CreatePage}>
          <CreatePage onSubmit={handleCreatePage} title="CreatePage" />
        </Route>
        <Route path="/usersPage" component={UsersPage}>
          <UsersPage
            users={users}
            goToCreatepage={goToCreatePage}
            title="UsersPage"
          />
        </Route>
      </Switch>
      <Route paths={['/', 'createPage', 'usersPage']}>
        <NavBar
          pages={[
            { title: 'Home', id: '/home' },
            { title: 'Create a new user', id: 'createPage' },
            { title: 'Users', id: 'usersPage' },
          ]}
        />
      </Route>
    </AppWrapper>
  )

  function handleCreatePage(newUser) {
    setUsers([newUser, ...users])
    history.push('usersPage')
  }
  function goToCreatePage() {
    history.push('createPage')
  }
}

export default App

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow-y: scroll;
`
