import { Switch, Route, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './themes/Themes'
import { useTheme } from './hooks/useTheme'

import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'

import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import NavBar from './components/NavBar'

const axios = require('axios')

function App() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [theme, themeToggler] = useTheme()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const history = useHistory()

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(error => console.error(error))
  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppWrapper>
        <Switch>
          <Route path="/" exact>
            <HomePage title="Home" onThemeClick={themeToggler} />
          </Route>
          <Route path="/createPage">
            <CreatePage onSubmit={handleCreatePage} title="Create Page" />
          </Route>
          <Route path="/usersPage">
            <UsersPage
              users={users}
              deleteUser={onDeleteUser}
              title="Users Page"
            />
          </Route>
          <Route path="/searchPage">
            <SearchPage
              users={filteredUsers}
              title="Search Page"
              onChange={event => handleSearchUser(event)}
            />
          </Route>
        </Switch>
        <Route paths={['/', 'createPage', 'usersPage', 'searchPage']}>
          <NavBar
            pages={[
              { title: 'Home', id: '/' },
              { title: 'New user', id: 'createPage' },
              { title: 'Users', id: 'usersPage' },
              { title: 'Search', id: 'searchPage' },
            ]}
          />
        </Route>
      </AppWrapper>
    </ThemeProvider>
  )

  function handleCreatePage(user) {
    createNewUserEntrie(user)
  }

  function onDeleteUser(id) {
    const updatedUsers = users.filter(user => user._id !== id)
    setUsers(updatedUsers)

    fetchedUsersAfterDelete(id)
  }

  function handleSearchUser(event) {
    const valueSearchInput = event.target.value.toLowerCase()
    let findUsers = []

    if (valueSearchInput.trim()) {
      findUsers = users.filter(user => {
        return user.skills.join().toLowerCase().search(valueSearchInput) !== -1
      })
    }
    setFilteredUsers(findUsers)
  }

  function createNewUserEntrie(user) {
    axios
      .post('/api/users', user)
      .then(res => setUsers([...users, res.data]))
      .catch(error => console.log(error))
    history.push('usersPage')
  }

  function fetchedUsersAfterDelete(id) {
    axios
      .delete(`/api/users/${id}`)
      .then(res =>
        fetch('/api/users')
          .then(res => res.json())
          .then(users => setUsers(users))
      )
      .catch(error => console.log(error))
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
