import { Switch, Route, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
  const history = useHistory()

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(error => console.error(error))
  }, [])

  return (
    <AppWrapper>
      <Switch>
        <Route path="/" exact>
          <HomePage title="Home" />
        </Route>
        <Route path="/createPage">
          <CreatePage onSubmit={handleCreatePage} title="Create Page" />
        </Route>
        <Route path="/usersPage">
          <UsersPage
            users={users}
            deleteUser={handleDeleteUser}
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
  )

  function handleCreatePage(user) {
    axios
      .post('/api/users', user)
      .then(res => setUsers([...users, res.data]))
      .catch(error => console.log(error))
    history.push('usersPage')
  }

  function handleDeleteUser(id) {
    const updatedUsers = users.filter(user => user._id !== id)
    setUsers(updatedUsers)

    axios
      .delete(`/api/users/${id}`)
      .then(res =>
        fetch('/api/users')
          .then(res => res.json())
          .then(users => setUsers(users))
      )
      .catch(error => console.log(error))
  }

  function handleSearchUser(event) {
    let value = event.target.value
    let result = []

    result = users.filter(user => {
      return user.name.search(value) !== -1
    })
    setFilteredUsers(result)
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
