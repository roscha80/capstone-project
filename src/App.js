import { Switch, Route, useHistory } from 'react-router-dom'

import styled from 'styled-components/macro'
import useLocalStorage from './hooks/useLocalStorage'

import Header from './components/Header'
import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

function App() {
  const [users, setUsers] = useLocalStorage('users', [])
  const history = useHistory()
  return (
    <AppWrapper>
      <Header>{history.id}</Header>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/createPage">
          <CreatePage onSubmit={handleCreatePage} />
        </Route>
        <Route path="/usersPage">
          <UsersPage users={users} goToCreatepage={goToCreatePage} />
        </Route>
      </Switch>
      <Route paths={['/', 'createPage', 'usersPage']}>
        <NavBar
          pages={[
            { title: 'Home', id: '/' },
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
  background: var(--background_dark);
  display: grid;
  grid-template-rows: auto min-content;
  padding: 12px;
  height: 100vh;
`
